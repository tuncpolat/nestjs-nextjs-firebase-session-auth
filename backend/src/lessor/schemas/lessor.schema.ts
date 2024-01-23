import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LessorDocument = Lessor & mongoose.Document;

@Schema()
export class Lessor {
  _id: string; // mongoose.ObjectId is a type that is used for the _id field and is created by mongoose

  @Prop({ unique: true, index: true })
  uid: string;

  @Prop({ index: true })
  email: string;

  @Prop()
  createdAt: Date;
}

export const LessorSchema = SchemaFactory.createForClass(Lessor);

LessorSchema.set('toJSON', {
  // this is a mongoose schema option that allows us to transform the returned document
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
