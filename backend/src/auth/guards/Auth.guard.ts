import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { isString } from 'lodash';
import { FirebaseAuthService } from '../services/firebase.service';

// AuthGuard is a NestJS guard that is used to protect routes
export class AuthGuard implements CanActivate {
  // inject the FirebaseAuthService to verify the token later on
  constructor(
    @Inject(FirebaseAuthService) private firebaseService: FirebaseAuthService,
  ) {}

  // canActivate is a method that is called before a route is accessed to allow or deny access
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest(); // access the HTTP request object

    if (
      req.headers['authorization'] &&
      isString(req.headers['authorization'])
    ) {
      const idToken = req.headers['authorization'].split(' ')[1]; // Bearer <token>

      return this.firebaseService
        .verifyIdToken(idToken)
        .then(() => {
          const request = context.switchToHttp().getRequest();
          request.token = idToken;
          return true;
        });
    } else {
      return false;
    }
  }
}
