import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  route_number: string;

  @IsString()
  @IsNotEmpty()
  station_list: string;

  @IsNumber()
  @IsNotEmpty()
  fare: number;

  @IsString()
  @IsNotEmpty()
  category: string;
}
