import { IsInt, IsDate, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTravelSheetDto {
  @ApiPropertyOptional({ description: 'ID of the train' })
  @IsInt()
  @IsOptional()
  travel_train_id?: number;

  @ApiProperty({ description: 'Departure day' })
  @IsDate()
  @IsNotEmpty()
  departures_day: Date;

  @ApiPropertyOptional({ description: 'ID of the train brigade' })
  @IsInt()
  @IsOptional()
  train_brigade_id?: number;
}