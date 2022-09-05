import { Test } from '@nestjs/testing';
import { ListBooksService } from './list-books.service';
import { BookRepository } from '@/repositories/book.repository';
import { Book } from '@/database/entities/__mocks__/book.entity';

jest.mock('@/repositories/book.repository');
describe('ListBooksService', () => {
  type SutTypes = { sut: ListBooksService; repository: BookRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, ListBooksService],
    }).compile();
    const service = moduleRef.get<ListBooksService>(ListBooksService);
    const repository = moduleRef.get<BookRepository>(BookRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all books', async () => {
    const { sut } = await makeSut();
    expect(await sut.list(Book.id)).toMatchObject([Book]);
  });
});
