import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaSerivce: PrismaService) {}

  async getAllUsers() {
    const users = await this.prismaSerivce.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
        user_type: true,
      },
      

    });

    //get users
    // save users to array filtering usert type
  }
}
