export class Follower {}
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'common/entities/base.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('PK__FOLLOWERS', ['id'], {
  unique: true,
})
@Entity('followers')
export class FollowerEntity extends BaseEntity {
  @ApiProperty()
  @Column({
    type: 'uuid',
  })
  followedId: string;

  @ApiProperty()
  @Column({
    type: 'uuid',
  })
  followedById: string;
}
