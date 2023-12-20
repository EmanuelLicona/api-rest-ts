import { CreateDateColumn, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn(
    {
      type: 'timestamp',
    },
  )
  createdAt: Date;

  @CreateDateColumn(
    {
      type: 'timestamp',
    },
  )
  updatedAt: Date;
}