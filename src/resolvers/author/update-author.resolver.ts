import { Inject, UseGuards } from '@nestjs/common';
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { Author } from '@/database/entities/author.entity';
import { UpdateAuthorInput } from '@/inputs/author/update-author.input';
import { UpdateAuthorService as IUpdateAuthorService } from '@/interfaces/author/update-author.interface';
import { UpdateAuthorService } from '@/services/author/update-author.service';
import { GqlAuthGuard } from '@/resolvers/auth/guard/auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver(() => Author)
export class UpdateAuthorResolver {
  constructor(
    @Inject(UpdateAuthorService)
    private updateAuthorService: IUpdateAuthorService,
  ) {}
  @Mutation(() => Author)
  async updateAuthor(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateAuthorInput,
  ): Promise<Author> {
    return this.updateAuthorService.update(id, input);
  }
}
