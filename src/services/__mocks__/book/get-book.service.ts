import { Book } from '@/database/entities/__mocks__/book.entity';

export class GetBookService {
  get = jest.fn(() => Book);
}
