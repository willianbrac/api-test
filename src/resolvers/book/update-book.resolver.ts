import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Account } from '@/database/entities/account.entity';
import { UpdateBookService as IUpdateBookService } from '@/interfaces/book/update-book.interface';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { UpdateBookService } from '@/services/book/update-book.service';
import { UpdateBookInput } from '@/inputs/book/update-book.input';
import { Book } from '@/database/entities/book.entity';

@UseGuards(GqlAuthGuard)
@Resolver(() => Account)
export class UpdateBookResolver {
  constructor(
    @Inject(UpdateBookService) private updateBookService: IUpdateBookService,
  ) {}
  @Mutation(() => Book)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateBookInput,
  ): Promise<Book> {
    return this.updateBookService.update(id, input);
  }
}
