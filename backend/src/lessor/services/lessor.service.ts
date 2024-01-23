import { Injectable } from '@nestjs/common';
import { LessorModelService } from './lessor.model.service';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class LessorService {
  constructor(private modelService: LessorModelService) {}

  async createLessor(auth: AuthDto) {
    return this.modelService.create({
      uid: auth.uid,
      email: auth.email,
    });
  }

  async getLessor(auth: AuthDto) {
    return this.modelService.findOneByUid(auth.uid);
  }

  async deleteLessor(uid: string) {
    return this.modelService.delete(uid);
  }
}
