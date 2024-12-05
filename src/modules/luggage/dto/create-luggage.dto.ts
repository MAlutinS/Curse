import { IsInt, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLuggageDto {
  @IsInt()
  @IsNotEmpty()
  train_id: number;

  @IsInt()
  @IsNotEmpty()
  passenger_id: number;

  @IsString()
  @IsNotEmpty()
  cargo_type: string;

  @IsNumber()
  @IsNotEmpty()
  cargo_weight: number;

  @IsNumber()
  @IsNotEmpty()
  transport_cost: number;
}