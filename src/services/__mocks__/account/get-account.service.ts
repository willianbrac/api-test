import { Account } from '@/database/entities/__mocks__/account.entity';

export class GetAccountService {
  get = jest.fn(() => Account);
}
