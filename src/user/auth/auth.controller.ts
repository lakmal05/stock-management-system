import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ForgetPassowrdDto, SignInDto, SignupDto } from '../dtos/auth.dto';
import { AuthService } from './auth.service';
import { emit } from 'process';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() body: SignupDto) {
    const user = body;
    return this.authService.signup(body);
  }

  @Post('/signin')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body);
  }

  /*foget Passowrd*/

  @Put('/forgetpassword')
  fogetPassword(@Body() body: ForgetPassowrdDto) {
    const UserEmail = body.email;
    

    return this.authService.forgetPassword(UserEmail);
  }
}
