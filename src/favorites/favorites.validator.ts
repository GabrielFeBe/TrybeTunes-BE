import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FavoritesDto {
  @IsOptional()
  @IsInt({ message: 'Id must be an integer' })
  id?: number;
  @IsNotEmpty({ message: 'UserId is required' })
  @IsInt({ message: 'UserId must be an integer' })
  userId: number;
  @IsNotEmpty({ message: 'TrackName is required' })
  @IsString({ message: 'TrackName must be a string' })
  trackName: string;
  @IsNotEmpty({ message: 'PreviewUrl is required' })
  @IsString({ message: 'PreviewUrl must be a string' })
  previewUrl: string;
  @IsNotEmpty({ message: 'TrackId is required' })
  @IsInt({ message: 'TrackId must be an integer' })
  trackId: number;
}
