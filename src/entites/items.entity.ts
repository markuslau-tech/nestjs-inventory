import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'items' })
export class Item extends BaseEntity {
  @Column({ length: 128, unique: true })
  name: string;

  @Column()
  quantity: number;

  @Column()
  notifyNo: number;
}
