import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '@/repositories/author.repository';

@Injectable()
export class DeleteAuthorService {
  constructor(private authorRepository: AuthorRepository) {}
  async delete(id: string): Promise<true> {
    const author = await this.authorRepository.findOneOrFail(id);
    await this.authorRepository.remove(author);
    return true;
  }
}
