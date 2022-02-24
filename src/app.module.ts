import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
@Module({
  imports: [
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
