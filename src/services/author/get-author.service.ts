import { Injectable } from '@nestjs/common';
import { Author } from '@/database/entities/author.entity';
import { AuthorRepository } from '@/repositories/author.repository';

@Injectable()
export class GetAuthorService {
  constructor(private authorRepository: AuthorRepository) {}
  async get(id: string): Promise<Author | undefined> {
    const author = await this.authorRepository.findOne(id);
    console.log(author);
    return author;
  }
}
