import { MigrationInterface, QueryRunner } from 'typeorm';
import { ADD_POSTS_DOWN, ADD_POSTS_UP } from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addPosts1645748002913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postUp = handleFileHelper.read(ADD_POSTS_UP).trim();

    await queryRunner.query(postUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const postDown = handleFileHelper.read(ADD_POSTS_DOWN).trim();

    await queryRunner.query(postDown);
  }
}
