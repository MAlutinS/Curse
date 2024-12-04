import { IsInt, IsNotEmpty, IsDate } from 'class-validator';

export class CreateWaybillDto {
  @IsInt()
  @IsNotEmpty()
  train_id: number;

  @IsDate()
  @IsNotEmpty()
  departure_date: Date;

  @IsDate()
  @IsNotEmpty()
  arrival_date: Date;

  @IsInt()
  @IsNotEmpty()
  crew_id: number;
}
