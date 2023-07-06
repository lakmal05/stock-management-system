import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserType } from '@prisma/client';

interface signupParams {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signup({ name, email, password }: signupParams) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return ConflictException;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        user_type: UserType.CLIENT,
      },
    });
    return user;
  }

  async signIn({ email, password }) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException('Invalid details', 400);
    }

    //    if user exist

    const hashedPassword = user.password;
    const isValidPassword = await bcrypt.compare(password, hashedPassword);
    if (!isValidPassword) {
      throw new HttpException('Invalid cardetial', 400);
    }

    //else
    const token = await this.generateJWT(user.email, user.id);
    return token;
  }

  generateJWT(email: string, id: number) {
    return jwt.sign(
      {
        email,
        id,
      },
      process.env.JSON_WEB_TOKEN_KEY,
      {
        expiresIn: 36000,
      },
    );
  }

  async generateProductKey(email: string) {
    //Genrate Prduct Key

    return true;
  }
}
