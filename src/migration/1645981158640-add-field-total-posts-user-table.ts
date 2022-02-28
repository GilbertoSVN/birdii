import { MigrationInterface, QueryRunner } from 'typeorm';
import {
  ADD_FIELD_TOTAL_POSTS_USER_TABLE_DOWN,
  ADD_FIELD_TOTAL_POSTS_USER_TABLE_UP,
} from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addFieldTotalPostsUserTable1645981158640
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const addFieldTotalPostsUserTableUp = handleFileHelper
      .read(ADD_FIELD_TOTAL_POSTS_USER_TABLE_UP)
      .trim();

    await queryRunner.query(addFieldTotalPostsUserTableUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const addFieldTotalPostsUserTableDown = handleFileHelper
      .read(ADD_FIELD_TOTAL_POSTS_USER_TABLE_DOWN)
      .trim();

    await queryRunner.query(addFieldTotalPostsUserTableDown);
  }
}
