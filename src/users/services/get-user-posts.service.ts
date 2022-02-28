import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { ILike, SelectQueryBuilder } from 'typeorm';
import { GetUserDto } from 'users/dto/get-user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class GetUserPostsService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  private getIdFilter(id: string) {
    if (id) return [{ id: ILike(`%${id}%`) }];

    return undefined;
  }

  async getAll({ id }: GetUserDto): Promise<UsersEntity> {
    return await this.usersRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.posts', 'posts')
      .where((query: SelectQueryBuilder<UsersEntity>) => {
        if (id) {
          query.andWhere(this.getIdFilter(id));
        }
      })
      .getOne();
  }
}
