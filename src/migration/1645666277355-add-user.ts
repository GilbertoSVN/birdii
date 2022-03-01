import { MigrationInterface, QueryRunner } from 'typeorm';
import { ADD_USER_DOWN, ADD_USER_UP } from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addUser1645666277355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userUp = handleFileHelper.read(ADD_USER_UP).trim();

    await queryRunner.query(userUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const userDown = handleFileHelper.read(ADD_USER_DOWN).trim();

    await queryRunner.query(userDown);
  }
}
