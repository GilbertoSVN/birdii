import { IsUUID } from 'class-validator';

export class BaseUserIdDto {
  @IsUUID()
  userId: string;
}
