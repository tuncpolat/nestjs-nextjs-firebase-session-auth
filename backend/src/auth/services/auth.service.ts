import { Injectable } from '@nestjs/common';
import { FirebaseAuthService } from './firebase.service';
import { CookieOptions } from 'express';

@Injectable()
export class AuthService {
  constructor(private firebaseService: FirebaseAuthService) {}

  async verifySessionCookie(session: string) {
    return this.firebaseService.verifySessionCookie(session);
  }

  async createSessionCookie(idToken: string, cookieOptions: CookieOptions) {
    const sessionCookie = await this.firebaseService.createSessionCookie(
      idToken,
      {
        expiresIn: cookieOptions.maxAge,
      },
    );

    const options = {
      name: 'session',
      value: sessionCookie,
      maxAge: cookieOptions.maxAge,
      httpOnly: cookieOptions.httpOnly,
      secure: cookieOptions.secure,
    };

    return options;
  }
}
