import { Account } from './account.interface';

export interface GetAccountService {
  Get(id: string): Promise<Account | null>;
}
