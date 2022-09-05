import { Inject, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { ListBooksService as IListBookService } from '@/interfaces/book/list-books.interface';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';
import { Book } from '@/database/entities/book.entity';
import { ListBooksService } from '@/services/book/list-books.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Book)
export class ListBooksResolver {
  constructor(
    @Inject(ListBooksService) private listBooksService: IListBookService,
  ) {}
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return this.listBooksService.list();
  }
}
