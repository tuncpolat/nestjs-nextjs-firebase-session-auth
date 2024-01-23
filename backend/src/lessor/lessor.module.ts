import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lessor, LessorSchema } from './schemas/lessor.schema';
import { AuthModule } from 'src/auth/auth.module';
import { LessorController } from './lessor.controller';
import { LessorService } from './services/lessor.service';
import { LessorModelService } from './services/lessor.model.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Lessor.name,
        schema: LessorSchema,
      },
    ]),
  ],
  controllers: [LessorController],
  providers: [LessorService, LessorModelService],
  exports: [],
})
export class LessorModule {}
