import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRoot(typeormConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
