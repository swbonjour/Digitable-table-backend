import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column()
  case: string;

  @Column()
  cpu: string;

  @Column()
  gpu: string;

  @Column()
  ram: string;

  @Column()
  power: string;
}
