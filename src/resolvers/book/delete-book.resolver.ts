import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { DeleteBookService as IDeleteBookService } from '@/interfaces/book/delete-book.interface';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { Book } from '@/database/entities/book.entity';
import { DeleteBookService } from '@/services/book/delete-book.service';

@Resolver(() => Book)
@UseGuards(GqlAuthGuard)
export class DeleteBookResolver {
  constructor(
    @Inject(DeleteBookService) private deleteBookService: IDeleteBookService,
  ) {}
  @Mutation(() => Boolean)
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<true> {
    return this.deleteBookService.delete(id);
  }
}
