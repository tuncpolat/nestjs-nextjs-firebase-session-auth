import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseService } from 'src/firebase/firebase.service';
import { SessionCookieOptions } from 'firebase-admin/lib/auth/base-auth';


@Injectable()
export class FirebaseAuthService {
  auth: admin.auth.Auth;

  constructor(private firebaseService: FirebaseService) {
    this.auth = firebaseService.getAuth();
  }

  async verifyIdToken(idToken: string): Promise<admin.auth.DecodedIdToken> {
    return this.auth.verifyIdToken(idToken);
  }

  async verifySessionCookie(session: string) {
    return this.auth.verifySessionCookie(session);
  }

  async createSessionCookie(idToken: string, options: SessionCookieOptions) {
    return this.auth.createSessionCookie(idToken, options);
  }
}
