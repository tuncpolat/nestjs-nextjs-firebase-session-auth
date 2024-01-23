import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { FirebaseAuthService } from '../services/firebase.service';

export class SessionGuard implements CanActivate {
  constructor(
    @Inject(FirebaseAuthService) private firebaseService: FirebaseAuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const session = req.cookies.session;

    if (!session) {
      return false;
    } else {
      return this.firebaseService
        .verifySessionCookie(session)
        .then((decodedToken) => {
          const request = context.switchToHttp().getRequest();
          request.auth = decodedToken;
          return true;
        })
        .catch(() => {
          return false;
        });
    }
  }
}
