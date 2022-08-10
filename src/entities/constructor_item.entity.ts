import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

export enum ConstructorItemEnum {
  CASE = 'case',
  CPU = 'cpu',
  GPU = 'gpu',
  RAM = 'ram',
  POWER = 'power',
}

@Entity()
export class ConstructorItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ConstructorItemEnum,
    default: ConstructorItemEnum.CASE,
  })
  type: ConstructorItemEnum;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;
}
