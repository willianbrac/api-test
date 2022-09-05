import { Book } from '@/database/entities/book.entity';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateBookInput {
  @Field(() => String)
  @IsNotEmpty()
  title: Book['title'];

  @Field(() => String)
  @IsNotEmpty()
  category: Book['category'];

  @Field(() => String)
  @IsNotEmpty()
  synopsis: Book['synopsis'];
}
