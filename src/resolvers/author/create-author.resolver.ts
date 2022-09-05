import { Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Author } from '@/database/entities/author.entity';
import { CreateAuthorInput } from '@/inputs/author/create-author.input';
import { CreateAuthorService as ICreateAuthorService } from '@/interfaces/author/create-author.interface';
import { CreateAuthorService } from '@/services/author/create-author.service';

@Resolver(() => Author)
export class CreateAuthorResolver {
  constructor(
    @Inject(CreateAuthorService)
    private createAuthorService: ICreateAuthorService,
  ) {}

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput): Promise<Author> {
    return this.createAuthorService.create(input);
  }
}
