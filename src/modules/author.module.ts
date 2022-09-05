import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteAuthorService } from '@/services/author/delete-author.service';
import { DeleteAuthorResolver } from '@/resolvers/author/delete-author.resolver';
import { GetAuthorService } from '@/services/author/get-author.service';
import { GetAuthorResolver } from '@/resolvers/author/get-author.resolver';
import { UpdateAuthorService } from '@/services/author/update-author.service';
import { UpdateAuthorResolver } from '@/resolvers/author/update-author.resolver';
import { ListAuthorsService } from '@/services/author/list-authors.service';
import { ListAuthorsResolver } from '@/resolvers/author/list-authors.resolver';
import { AuthorRepository } from '@/repositories/author.repository';
import { CreateAuthorService } from '@/services/author/create-author.service';
import { CreateAuthorResolver } from '@/resolvers/author/create-author.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  providers: [
    CreateAuthorService,
    CreateAuthorResolver,
    ListAuthorsService,
    ListAuthorsResolver,
    GetAuthorService,
    GetAuthorResolver,
    DeleteAuthorService,
    DeleteAuthorResolver,
    UpdateAuthorService,
    UpdateAuthorResolver,
  ],
})
export class AuthorModule {}
