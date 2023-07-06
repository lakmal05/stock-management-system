import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignupDto } from '../dtos/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() body: SignupDto) {
    const user = body;
    return this.authService.signup(body);
  }

 @Post('/signin')
 signIn(@Body()body: SignInDto){
  return this.authService.signIn(body);  
  }
}
