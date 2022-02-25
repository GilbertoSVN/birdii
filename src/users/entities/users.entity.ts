import { BaseEntity } from 'common/entities/base.entity';
import { PostEntity } from 'posts/entities/post.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

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

  @OneToMany(() => PostEntity, (post) => post.relatedUser, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  posts: PostEntity[];
}
