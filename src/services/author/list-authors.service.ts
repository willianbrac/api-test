import { Injectable } from '@nestjs/common';
import { Author } from '@/database/entities/author.entity';
import { AuthorRepository } from '@/repositories/author.repository';

@Injectable()
export class ListAuthorsService {
  constructor(private authorRepository: AuthorRepository) {}
  async list(author: Author['id']): Promise<Author[]> {
    return this.authorRepository.find({ id: author });
  }
}
