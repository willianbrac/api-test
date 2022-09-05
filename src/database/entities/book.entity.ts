import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author.entity';
import Dates from './dates.entity';

@ObjectType()
@Entity()
export class Book extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  category: string;

  @Field(() => String)
  @Column()
  synopsis: string;

  @Field(() => Author)
  @ManyToOne(
    () => Author,
    (author: Author) => author.books,
    { cascade: true },
  )
  author: Author;
}
