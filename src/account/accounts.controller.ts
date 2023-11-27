import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountDto } from './account.validator';
import { Public } from 'src/utils/public';

@Controller('accounts')
@UsePipes(new ValidationPipe())
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() accountt: AccountDto) {
    const response = await this.accountsService.create(accountt);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Public()
  async findOne(@Param() { id }: { id: string }) {
    if (typeof Number(id) !== 'number')
      throw new BadRequestException('Invalid id');
    console.log(+id);
    const response = await this.accountsService.findOne(+id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param() { id }: { id: string }, @Body() account: AccountDto) {
    if (typeof Number(id) !== 'number')
      throw new BadRequestException('Invalid id');
    const response = await this.accountsService.update(Number(id), account);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = response;
    return rest;
  }
}
