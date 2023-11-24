import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FavoritesDto } from './favorites.validator';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
@UsePipes(new ValidationPipe())
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}
  @Post()
  async create(@Body() favorite: FavoritesDto) {
    const response = await this.favoritesService.create(favorite);
    return response;
  }
}
