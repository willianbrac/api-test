import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Author } from '@/database/entities/author.entity';
import { GetAuthorService as IGetAuthorService } from '@/interfaces/author/get-author.interface';
import { GetAuthorService } from '@/services/author/get-author.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Author)
export class GetAuthorResolver {
  constructor(
    @Inject(GetAuthorService) private getAuthorService: IGetAuthorService,
  ) {}
  @Query(() => Author, { nullable: true })
  async author(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Author | undefined> {
    return this.getAuthorService.get(id);
  }
}
