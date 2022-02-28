import { IsUUID } from 'class-validator';

export class AddUserPostCountDto {
  @IsUUID()
  userId: string;
}
