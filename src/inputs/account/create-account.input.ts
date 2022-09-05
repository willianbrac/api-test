import { Account } from '@/database/entities/account.entity';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAccountInput {
  @Field(() => String)
  @IsNotEmpty()
  name: Account['name'];

  @Field(() => String)
  @IsNotEmpty()
  email: Account['email'];

  @Field(() => String)
  @IsNotEmpty()
  password: Account['password'];
}
