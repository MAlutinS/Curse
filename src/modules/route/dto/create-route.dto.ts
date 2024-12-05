import { IsInt, IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';

export class CreateRouteDto {
  @IsInt()
  @IsNotEmpty()
  route_number: number;

  @IsArray()
  @IsString({ each: true })
  stations_list: string[];

  @IsNumber()
  @IsNotEmpty()
  route_cost: number;

  @IsString()
  @IsNotEmpty()
  route_category: string;
}