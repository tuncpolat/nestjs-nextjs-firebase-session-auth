import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration, { config } from './config/configuration';
import { FirebaseModule } from './firebase/firebase.module';
import { LessorModule } from './lessor/lessor.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    FirebaseModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(config.mongoUrl),
    AuthModule,
    LessorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
