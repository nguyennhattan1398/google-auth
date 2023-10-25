import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleOAuthGuard } from './auth/google-oauth.guard';

@Controller('auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) { }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.appService.googleLogin(req);
  }
}
