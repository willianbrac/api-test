import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { GetAccountService } from './get-account.service';

jest.mock('@/repositories/account.repository');
describe('GetAccountService', () => {
  type SutTypes = { sut: GetAccountService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, GetAccountService],
    }).compile();
    const service = moduleRef.get<GetAccountService>(GetAccountService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find a Account by id', async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.Get(Account.id)).toBe(Account);
    expect(repository.findOne).toHaveBeenCalledWith(Account.id);
  });
});
