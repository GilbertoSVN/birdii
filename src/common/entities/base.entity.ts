import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity as TypeOrmBaseEntity,
  BeforeInsert,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @ApiProperty()
  @PrimaryColumn('uuid', {
    primary: true,
    name: 'id',
  })
  id: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'createdAt', nullable: false, type: 'datetime' })
  createdAt: Date;

  @BeforeInsert()
  defaultIdUuid() {
    this.id = this.id || uuidv4();
  }

  @BeforeInsert()
  defaultDate() {
    this.createdAt = new Date();
  }
}
