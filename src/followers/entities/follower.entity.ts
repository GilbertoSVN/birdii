export class Follower {}
import { BaseEntity } from 'common/entities/base.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('PK__FOLLOWERS', ['id'], {
  unique: true,
})
@Entity('followers')
export class FollowerEntity extends BaseEntity {
  @Column({
    type: 'uuid',
  })
  followedId: string;

  @Column({
    type: 'uuid',
  })
  followedById: string;
}
