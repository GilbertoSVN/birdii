import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/post.module';
import { FollowersModule } from './followers/followers.module';
import typeormConfig from './config/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRoot(typeormConfig()),
    UsersModule,
    PostsModule,
    FollowersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
