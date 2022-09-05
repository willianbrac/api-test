import { Test } from '@nestjs/testing';
import { Author } from '@/database/entities/__mocks__/author.entity';
import { AuthorRepository } from '@/repositories/author.repository';
import { GetAuthorService } from './get-author.service';

jest.mock('@/repositories/author.repository');
describe('GetAuthorService', () => {
  type SutTypes = { sut: GetAuthorService; repository: AuthorRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthorRepository, GetAuthorService],
    }).compile();
    const service = moduleRef.get<GetAuthorService>(GetAuthorService);
    const repository = moduleRef.get<AuthorRepository>(AuthorRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Author by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.get(Author.id)).toBe(Author);
    expect(repository.findOne).toHaveBeenCalledWith(Author.id);
  });
});
