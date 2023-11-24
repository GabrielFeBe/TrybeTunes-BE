import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './favorites.entity';
import { Repository } from 'typeorm';
import { FavoritesDto } from './favorites.validator';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorites)
    private favoritesRepository: Repository<Favorites>,
  ) {}

  async create(favorite: FavoritesDto): Promise<Favorites> {
    return await this.favoritesRepository.save(favorite);
  }

  async remove(id: number): Promise<void> {
    await this.favoritesRepository.delete(id);
  }
}
