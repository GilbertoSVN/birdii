import { FindOneOptions, ObjectID } from 'typeorm';

export interface InputParams<T> {
  id?: string | number | Date | ObjectID;
  options?: FindOneOptions<T | undefined>;
}

export interface InputEntity<T> {
  entity?: unknown;
  entities?: T[];
}

export interface IBaseService<T> {
  findOne({ id, options }: InputParams<T>): Promise<T | undefined>;
  findAll({ options }: InputParams<T>): Promise<T[] | undefined>;
}
