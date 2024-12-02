import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateLuggageDto {
  @IsInt()
  train_id: number;

  @IsInt()
  passenger_id: number;

  @IsString()
  cargo_type: string;

  @IsNumber()
  cargo_weight: number;

  @IsNumber()
  transportation_cost: number;
}

export class UpdateLuggageDto {
  @IsInt()
  train_id?: number;

  @IsInt()
  passenger_id?: number;

  @IsString()
  cargo_type?: string;

  @IsNumber()
  cargo_weight?: number;

  @IsNumber()
  transportation_cost?: number;
}