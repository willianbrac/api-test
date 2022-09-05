import { Author } from '@/database/entities/__mocks__/author.entity';

export class GetAuthorService {
  get = jest.fn(() => Author);
}
