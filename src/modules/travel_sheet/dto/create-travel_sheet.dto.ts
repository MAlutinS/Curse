import { IsInt, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTravelSheetDto {
  @ApiProperty({ description: 'Id of the travel train' })
  @IsInt()
  @IsNotEmpty()
  travel_train_id: number;

  @ApiProperty({ description: 'Date of the departures' })
  @IsDate()
  @IsNotEmpty()
  departures_day: Date;

  @ApiProperty({ description: 'Id of the train brigade' })
  @IsInt()
  @IsNotEmpty()
  train_brigade_id: number;
}