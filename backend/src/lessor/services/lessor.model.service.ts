import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lessor, LessorDocument } from '../schemas/lessor.schema';
import { Model } from 'mongoose';
import { CreateLessorDto } from '../dto/create-lessor.dto';

@Injectable()
export class LessorModelService {
  constructor(@InjectModel(Lessor.name) private model: Model<LessorDocument>) {}

  async create({ uid, email }: CreateLessorDto): Promise<Lessor> {
    const newLessor = new this.model({ uid, email, createdAt: new Date() });
    return newLessor.save();
  }

  async findOneByUid(uid: string): Promise<Lessor> {
    return this.model.findOne({ uid });
  }

  async delete(uid: string): Promise<any> {
    return this.model.deleteOne({ uid });
  }
}
