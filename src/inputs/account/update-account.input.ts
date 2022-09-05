import { Account } from '@/database/entities/account.entity';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAccountInput {
  @Field(() => String)
  @IsNotEmpty()
  email: Account['email'];

  @Field(() => String)
  @IsNotEmpty()
  password: Account['password'];
}
