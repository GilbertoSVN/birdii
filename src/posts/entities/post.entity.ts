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
    nullable: true,
  })
  description: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  isRepost: boolean;

  @Column({
    type: 'int',
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
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
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
