import { Module } from '@nestjs/common';
import { FirebaseAuthService } from './services/firebase.service';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  providers: [AuthService, FirebaseAuthService],
  controllers: [AuthController],
  exports: [FirebaseAuthService],
})
export class AuthModule {}
