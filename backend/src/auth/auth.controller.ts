import { Controller, Delete, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CookieOptions, Response } from 'express';
import { AuthGuard } from './guards/Auth.guard';
import { SessionGuard } from './guards/Session.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  cookieOptions: CookieOptions = {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 5 * 1000,
    secure: false,
  };

  @Get()
  async getSession(@Req() req, @Res() res) {
    const session = req.cookies.session;
    if (!session) {
      res.status(401).send({ isLogged: false });
    }
    const decodedToken = await this.authService.verifySessionCookie(session);

    if (!decodedToken) {
      res.status(401).send({ isLogged: false });
    }
    res.status(200).send(decodedToken);
  }

  @UseGuards(AuthGuard)
  @Post()
  async sessionLogin(@Req() req, @Res() res: Response) {
    const cookie = await this.authService.createSessionCookie(
      req.token,
      this.cookieOptions,
    );
    res.cookie(cookie.name, cookie.value, this.cookieOptions);
    res.send(JSON.stringify({ status: 'success' }));
  }

  @UseGuards(SessionGuard)
  @Delete()
  removeSession(@Req() req, @Res() res: Response) {
    res.clearCookie('session', this.cookieOptions);
    res.send(JSON.stringify({ status: 'success' }));
  }
}
