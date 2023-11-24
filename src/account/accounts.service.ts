import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './accounts.entity';
import { Repository } from 'typeorm';
import { AccountDto } from './account.validator';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async findOne(id: number): Promise<Account> {
    return await this.accountsRepository.findOne({
      where: { id },
    });
  }

  async create(account: AccountDto): Promise<Account> {
    return await this.accountsRepository.save(account);
  }
}
