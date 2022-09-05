import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from '@/repositories/account.repository';
import { CreateAccountResolver } from '@/resolvers/account/create-account.resolver';
import { UpdateAccountResolver } from '@/resolvers/account/update-account.resolver';
import { DeleteAccountResolver } from '@/resolvers/account/delete-account.resolver';
import { ListAccountsResolver } from '@/resolvers/account/list-accounts.resolver';
import { GetAccountResolver } from '@/resolvers/account/get-account.resolver';
import { CreateAccountService } from '@/services/account/create-account.service';
import { DeleteAccountService } from '@/services/account/delete-account.service';
import { UpdateAccountService } from '@/services/account/update-account.service';
import { GetAccountService } from '@/services/account/get-account.service';
import { ListAccountsService } from '@/services/account/list-accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository])],
  providers: [
    CreateAccountService,
    CreateAccountResolver,
    DeleteAccountService,
    DeleteAccountResolver,
    ListAccountsService,
    ListAccountsResolver,
    GetAccountService,
    GetAccountResolver,
    UpdateAccountService,
    UpdateAccountResolver,
  ],
})
export class AccountModule {}
