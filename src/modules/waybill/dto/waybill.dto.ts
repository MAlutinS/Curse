import { IsInt, IsDate } from 'class-validator';

export class CreateWaybillDto {
  @IsInt()
  train_id: number;

  @IsDate()
  departure_date: Date;

  @IsDate()
  arrival_date: Date;

  @IsInt()
  crew_id: number;
}

export class UpdateWaybillDto {
  @IsInt()
  train_id?: number;

  @IsDate()
  departure_date?: Date;

  @IsDate()
  arrival_date?: Date;

  @IsInt()
  crew_id?: number;
}