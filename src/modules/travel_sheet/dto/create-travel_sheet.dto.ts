import { IsInt, IsNotEmpty, IsDate } from 'class-validator';

export class CreateTravelSheetDto {
  @IsInt()
  @IsNotEmpty()
  travel_train_id: number;

  @IsDate()
  @IsNotEmpty()
  departures_day: Date;

  @IsInt()
  @IsNotEmpty()
  train_brigade_id: number;
}