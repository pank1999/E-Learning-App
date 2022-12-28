import { Controller } from '@nestjs/common';
import { Body, Post, Request, UseGuards } from '@nestjs/common/decorators';
// import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log(req.body);
    return await this.authService.login(req.body);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    console.log(user);
    return await this.authService.create(user);
  }
}
