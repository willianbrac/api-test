import { Test } from '@nestjs/testing';
import { Author } from '@/database/entities/__mocks__/author.entity';
import { AuthorRepository } from '@/repositories/author.repository';
import { ListAuthorsService } from './list-authors.service';

jest.mock('@/repositories/author.repository');
describe('ListAuthorsServiceService', () => {
  type SutTypes = {
    sut: ListAuthorsService;
    repository: AuthorRepository;
  };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthorRepository, ListAuthorsService],
    }).compile();
    const service = moduleRef.get<ListAuthorsService>(ListAuthorsService);
    const repository = moduleRef.get<AuthorRepository>(AuthorRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all Authors', async () => {
    const { sut } = await makeSut();
    expect(await sut.list(Author.id)).toMatchObject([Author]);
  });
});
