import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '@/repositories/author.repository';
import { UpdateAuthorInput } from '@/inputs/author/update-author.input';
import { Author } from '@/database/entities/author.entity';

@Injectable()
export class UpdateAuthorService {
  constructor(private authorRepository: AuthorRepository) {}
  async update(id: string, input: UpdateAuthorInput): Promise<Author> {
    const author = await this.authorRepository.findOneOrFail(id);
    const authorUpdated = Object.assign<Author, UpdateAuthorInput>(
      author,
      input,
    );
    return this.authorRepository.save(authorUpdated);
  }
}
