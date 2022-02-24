import { BaseEntity } from 'common/entities/base.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('PK__USERS', ['id'], {
  unique: true,
})
@Entity('users')
export class UsersEntity extends BaseEntity {
  @Column({
    type: 'text',
    length: 14,
    unique: true,
  })
  username: string;
}
