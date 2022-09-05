import { Injectable } from '@nestjs/common';
import { Account } from '@/database/entities/account.entity';
import { AccountRepository } from '@/repositories/account.repository';

@Injectable()
export class GetAccountService {
  constructor(private accountRepository: AccountRepository) {}
  async Get(id: string): Promise<Account | undefined> {
    return this.accountRepository.findOne(id);
  }
}
