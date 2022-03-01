import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from '../../posts/dto/create-post.dto';

export class UserPostDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  totalPosts: number;

  @ApiProperty()
  totalFollowed: number;

  @ApiProperty()
  totalFollowers: number;

  @ApiProperty({ type: [CreatePostDto] })
  posts: CreatePostDto[];
}
