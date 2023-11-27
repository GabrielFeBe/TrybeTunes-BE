import { BadRequestException, Injectable } from '@nestjs/common';
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

  async findOne(id: number): Promise<Account | null> {
    const response: Account | null = await this.accountsRepository.findOne({
      where: { id },
    });

    return response;
  }

  async findByEmail(email: string): Promise<Account | null> {
    const response: Account | null = await this.accountsRepository.findOne({
      where: { email },
    });
    return response;
  }

  async create(account: AccountDto): Promise<Account> {
    const lookingForValidEmail = await this.findByEmail(account.email);
    if (lookingForValidEmail) {
      throw new BadRequestException('Email already exists');
    }
    return await this.accountsRepository.save(account);
  }
  async update(id: number, account: AccountDto): Promise<Account> {
    const updatingAccount = await this.findOne(id);
    if (!updatingAccount) {
      throw new BadRequestException('Account not found');
    }
    updatingAccount.email = account.email;
    updatingAccount.password = account.password;
    updatingAccount.name = account.name;
    updatingAccount.description = account.description;
    updatingAccount.image = account.image;
    const updatedAccount = await this.accountsRepository.save(updatingAccount);
    return updatedAccount;
  }
}
