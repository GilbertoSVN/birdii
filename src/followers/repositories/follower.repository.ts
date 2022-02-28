import { FollowerEntity } from 'followers/entities/follower.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(FollowerEntity)
export class FollowerRepository extends Repository<FollowerEntity> {}
