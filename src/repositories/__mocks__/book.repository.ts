import { Book } from "@/database/entities/__mocks__/book.entity";

export class BookRepository {
  find = jest.fn(() => [Book]);
  findOne = jest.fn(() => Book);
  findOneOrFail = jest.fn(() => Book);
  remove = jest.fn();
  save = jest.fn(() => Book);
}
