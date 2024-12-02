import { IsString, IsNumber } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  route_number: string;

  @IsString()
  station_list: string;

  @IsNumber()
  fare: number;

  @IsString()
  category: string;
}

export class UpdateRouteDto {
  @IsString()
  route_number?: string;

  @IsString()
  station_list?: string;

  @IsNumber()
  fare?: number;

  @IsString()
  category?: string;
}