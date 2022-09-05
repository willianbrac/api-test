import { Test } from '@nestjs/testing';
import { Author } from '@/database/entities/__mocks__/author.entity';
import { AuthorRepository } from '@/repositories/author.repository';
import { DeleteAuthorService } from '@/services/author/delete-author.service';

jest.mock('@/repositories/author.repository');
describe('DeleteAuthorService', () => {
  type SutTypes = { sut: DeleteAuthorService; repository: AuthorRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthorRepository, DeleteAuthorService],
    }).compile();
    const service = moduleRef.get<DeleteAuthorService>(DeleteAuthorService);
    const repository = moduleRef.get<AuthorRepository>(AuthorRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should remove a Author', async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(Author.id);
    expect(repository.remove).toHaveBeenCalledWith(Author);
  });
});
