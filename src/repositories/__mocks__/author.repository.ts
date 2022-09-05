import { Author } from '@/database/entities/__mocks__/author.entity';

export class AuthorRepository {
  find = jest.fn(() => [Author]);
  findOne = jest.fn(() => Author);
  findOneOrFail = jest.fn(() => Author);
  remove = jest.fn();
  save = jest.fn(() => Author);
}
