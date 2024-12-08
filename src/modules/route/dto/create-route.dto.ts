import { IsInt, IsNotEmpty, IsString, IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRouteDto {
  @ApiProperty({ description: 'Number of the route' })
  @IsInt()
  @IsNotEmpty()
  route_number: number;

  @ApiProperty({ description: 'List of the stations' })
  @IsArray()
  @IsString({ each: true })
  stations_list: string[];

  @ApiProperty({ description: 'Cost of the route' })
  @IsNumber()
  @IsNotEmpty()
  route_cost: number;

  @ApiProperty({ description: 'Category of the route' })
  @IsString()
  @IsNotEmpty()
  route_category: string;
}