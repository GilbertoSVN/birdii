import { MigrationInterface, QueryRunner } from 'typeorm';
import {
  ADD_FOLLOWERS_TO_USERS_TABLE_DOWN,
  ADD_FOLLOWERS_TO_USERS_TABLE_UP,
} from './constants';
import handleFileHelper from './helpers/handle-file.helper';

export class addFollowersToUsersTable1646085067437
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postUp = handleFileHelper
      .read(ADD_FOLLOWERS_TO_USERS_TABLE_UP)
      .trim();

    await queryRunner.query(postUp);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const postDown = handleFileHelper
      .read(ADD_FOLLOWERS_TO_USERS_TABLE_DOWN)
      .trim();

    await queryRunner.query(postDown);
  }
}
