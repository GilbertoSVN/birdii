import { BaseEntity, Repository } from 'typeorm';
import {
  IBaseService,
  InputParams,
} from '../interfaces/base-services.interface';

export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async findOne({ id, options }: InputParams<T>): Promise<T | undefined> {
    return this.repository.findOne(id, options);
  }

  async findAll({ options }: InputParams<T>): Promise<T[] | undefined> {
    return this.repository.find(options);
  }
}
