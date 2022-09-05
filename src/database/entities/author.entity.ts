import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class Author extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Book)
  @OneToMany(
    () => Book,
    (book: Book) => book.author,
  )
  books?: Book[];
}
