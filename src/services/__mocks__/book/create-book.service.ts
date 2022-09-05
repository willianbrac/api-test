import { Book } from '@/database/entities/__mocks__/book.entity';
export class CreateBookService {
  create = jest.fn(() => Book);
}
