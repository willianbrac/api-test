import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Author } from '@/database/entities/author.entity';
import { DeleteAuthorService as IDeleteAuthorService } from '@/interfaces/author/delete-author.interface';
import { DeleteAuthorService } from '@/services/author/delete-author.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@Resolver(() => Author)
@UseGuards(GqlAuthGuard)
export class DeleteAuthorResolver {
  constructor(
    @Inject(DeleteAuthorService)
    private deleteAuthorService: IDeleteAuthorService,
  ) {}
  @Mutation(() => Boolean)
  async deleteAuthor(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<true> {
    return this.deleteAuthorService.delete(id);
  }
}
