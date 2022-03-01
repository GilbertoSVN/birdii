import { IsInt, IsOptional, IsString } from 'class-validator';

export class CommonPaginateDto {
  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  pageSize?: number;

  @IsOptional()
  @IsString()
  keywords?: string;

  @IsOptional()
  @IsString()
  sortBy?: string;
}
