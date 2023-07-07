import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  email: string;
  @IsString()
  @MinLength(5)
  password: string;
}

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @MinLength(5)
  password: string;
}

export class ForgetPassowrdDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}
