import { Author } from '@/database/entities/author.entity';
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class AuthorInput {
  @Field(() => ID)
  @IsNotEmpty()
  id: Author['id'];
}
