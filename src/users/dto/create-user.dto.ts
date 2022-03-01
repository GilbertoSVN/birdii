import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(14)
  @MinLength(4)
  @Matches(/^\w+$/, { message: 'only alphanumeric characters are valid' })
  username: string;
}
