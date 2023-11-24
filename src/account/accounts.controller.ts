import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountDto } from './account.validator';

@Controller('accounts')
@UsePipes(new ValidationPipe())
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() accountt: AccountDto) {
    const response = await this.accountsService.create(accountt);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }
}
