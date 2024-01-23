import { IsString } from 'class-validator';

export class CreateLessorDto {
  @IsString()
  uid: string;

  @IsString()
  email: string;
}
