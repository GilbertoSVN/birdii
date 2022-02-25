import { BaseEntity } from 'common/entities/base.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UsersEntity } from 'users/entities/users.entity';

@Index('PK__POSTS', ['id'], {
  unique: true,
})
@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column({
    type: 'text',
    length: 777,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'int',
    length: 1,
    nullable: false,
    default: 0,
  })
  isRepost: boolean;

  @Column({
    type: 'int',
    length: 1,
    nullable: false,
    default: 0,
  })
  isQuote: boolean;

  @Column({
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @ManyToOne(() => UsersEntity, (user) => user.posts)
  relatedUser: UsersEntity;

  @Column({
    type: 'uuid',
    nullable: true,
    default: null,
  })
  postId: string;

  @OneToMany(() => PostEntity, (post) => post.post)
  relatedPosts: PostEntity[];

  @ManyToOne(() => PostEntity, (post) => post.relatedPosts, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'postId', referencedColumnName: 'id' }])
  post: PostEntity;
}
