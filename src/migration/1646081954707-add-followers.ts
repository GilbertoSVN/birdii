import { MigrationInterface, QueryRunner } from 'typeorm';
import { ADD_FOLLOWERS_DOWN, ADD_FOLLOWERS_UP } from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addFollowers1646081954707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postUp = handleFileHelper.read(ADD_FOLLOWERS_UP).trim();

    await queryRunner.query(postUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const postDown = handleFileHelper.read(ADD_FOLLOWERS_DOWN).trim();

    await queryRunner.query(postDown);
  }
}
