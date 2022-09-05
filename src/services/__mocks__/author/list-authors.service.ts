import { Author } from '@/database/entities/__mocks__/author.entity';

export class ListAuthorsService {
  list = jest.fn(() => [Author]);
}
