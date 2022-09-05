import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { Book } from '@/database/entities/book.entity';
import { GetBookService } from '@/services/book/get-book.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Book)
export class GetBookResolver {
  constructor(@Inject(GetBookService) private getBookService: GetBookService) {}
  @Query(() => Book, { nullable: true })
  async book(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Book | undefined> {
    return this.getBookService.get(id);
  }
}
