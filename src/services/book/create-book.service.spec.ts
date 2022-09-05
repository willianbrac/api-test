import { Test } from '@nestjs/testing';
import faker from 'faker';
import { Book } from '@/database/entities/__mocks__/book.entity';
import { CreateBookService } from '../book/create-book.service';
import { BookRepository } from '@/repositories/book.repository';
import { CreateBookInput } from '@/inputs/book/create-book.input';
import { Author } from '@/database/entities/author.entity';

jest.mock('@/repositories/book.repository');
describe('CreateBookService', () => {
  type SutTypes = { sut: CreateBookService; repository: BookRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, CreateBookService],
    }).compile();
    const service = moduleRef.get<CreateBookService>(CreateBookService);
    const repository = moduleRef.get<BookRepository>(BookRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should create a book', async () => {
    const { sut, repository } = await makeSut();
    const { id } = new Author();
    const bookCreateInput: CreateBookInput = {
      title: faker.name.title(),
      category: faker.name.title(),
      synopsis: faker.lorem.paragraph(),
      author: { id },
    };
    const result = await sut.create(bookCreateInput);
    expect(result).toBe(Book);
    expect(repository.save).toHaveBeenCalledWith(bookCreateInput);
  });
});
