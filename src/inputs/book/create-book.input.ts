import { Author } from '@/database/entities/author.entity';
import { Book } from '@/database/entities/book.entity';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { AuthorInput } from './author.input';

@InputType()
export class CreateBookInput {
  @Field(() => String)
  @IsNotEmpty()
  title: Book['title'];

  @Field(() => String)
  @IsNotEmpty()
  category: Book['category'];

  @Field(() => String)
  @IsNotEmpty()
  synopsis: Book['synopsis'];

  @Field(() => AuthorInput)
  @IsNotEmpty()
  author: AuthorInput;
}
