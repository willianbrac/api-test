import { Test } from '@nestjs/testing';
import { Account } from '@/database/entities/__mocks__/account.entity';
import { AccountRepository } from '@/repositories/account.repository';
import { ListAccountsService } from './list-accounts.service';

jest.mock('@/repositories/account.repository');
describe('ListAccountsService', () => {
  type SutTypes = { sut: ListAccountsService; repository: AccountRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AccountRepository, ListAccountsService],
    }).compile();
    const service = moduleRef.get<ListAccountsService>(ListAccountsService);
    const repository = moduleRef.get<AccountRepository>(AccountRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it('should find all Accounts', async () => {
    const { sut } = await makeSut();
    expect(await sut.list()).toMatchObject([Account]);
  });
});
