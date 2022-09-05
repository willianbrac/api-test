import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '@/repositories/author.repository';
import { CreateAuthorInput } from '@/inputs/author/create-author.input';
import { Author } from '@/database/entities/author.entity';

@Injectable()
export class CreateAuthorService {
  constructor(private authorRepository: AuthorRepository) {}
  async create(input: CreateAuthorInput): Promise<Author> {
    return this.authorRepository.save(input);
  }
}
