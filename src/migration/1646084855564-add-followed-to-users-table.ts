import { MigrationInterface, QueryRunner } from 'typeorm';
import {
  ADD_FOLLOWED_TO_USERS_TABLE_DOWN,
  ADD_FOLLOWED_TO_USERS_TABLE_UP,
} from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addFollowedToUsersTable1646084855564
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postUp = handleFileHelper.read(ADD_FOLLOWED_TO_USERS_TABLE_UP).trim();

    await queryRunner.query(postUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const postDown = handleFileHelper
      .read(ADD_FOLLOWED_TO_USERS_TABLE_DOWN)
      .trim();

    await queryRunner.query(postDown);
  }
}
