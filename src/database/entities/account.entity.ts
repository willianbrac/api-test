import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.entity';
import { hasPassowrdTransform } from '@/shared/crypto';

@ObjectType()
@Entity()
export class Account extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Column({
    transformer: hasPassowrdTransform,
  })
  @HideField()
  password: string;
}
