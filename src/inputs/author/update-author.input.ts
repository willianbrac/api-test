import { Author } from '@/database/entities/author.entity';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateAuthorInput } from './create-author.input';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => ID)
  @IsNotEmpty()
  id: Author['id'];
}
