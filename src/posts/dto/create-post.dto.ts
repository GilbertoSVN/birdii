import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  ValidateIf,
} from 'class-validator';

export class CreatePostDto {
  @IsOptional()
  @ValidateIf(({ isRepost }) => !isRepost)
  @IsNotEmpty()
  @IsString()
  @Length(1, 777)
  description: string;

  @IsOptional()
  @IsBoolean()
  isRepost: boolean;

  @IsOptional()
  @IsBoolean()
  isQuote: boolean;

  @IsUUID()
  userId: string;

  @IsOptional()
  @IsUUID()
  postId: string;
}
