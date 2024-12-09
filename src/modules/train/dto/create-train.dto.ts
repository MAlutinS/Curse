import { IsInt, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTrainDto {
  @ApiProperty({ description: 'Route number of the train' })
  @IsInt()
  @IsNotEmpty()
  train_route_number: number;

  @ApiPropertyOptional({ description: 'ID of the locomotive' })
  @IsInt()
  @IsOptional()
  train_locomotive_id?: number;

  @ApiProperty({ description: 'Length of the train' })
  @IsInt()
  @IsNotEmpty()
  train_length: number;
}