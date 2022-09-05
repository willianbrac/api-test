import { Inject, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Author } from '@/database/entities/author.entity';
import { ListAuthorsService as IListAuthorsService } from '@/interfaces/author/list-authors.interface';
import { ListAuthorsService } from '@/services/author/list-authors.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Author)
export class ListAuthorsResolver {
  constructor(
    @Inject(ListAuthorsService)
    private listAuthorsService: IListAuthorsService,
  ) {}
  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    return this.listAuthorsService.list();
  }
}
