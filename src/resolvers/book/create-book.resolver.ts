import { Inject, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateBookService as ICreateBookService } from '@/interfaces/book/create-book.interface';
import { Book } from '@/database/entities/book.entity';
import { CreateBookService } from '@/services/book/create-book.service';
import { CreateBookInput } from '@/inputs/book/create-book.input';
import { GqlAuthGuard } from '../auth/guard/auth.guard';

@Resolver(() => Book)
@UseGuards(GqlAuthGuard)
export class CreateBookResolver {
  constructor(
    @Inject(CreateBookService) private createBookService: ICreateBookService,
  ) {}

  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
    return this.createBookService.create(input);
  }
}
