import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  @IsNotEmpty()
  train_number: string;

  @IsString()
  @IsNotEmpty()
  day_of_operation: string;

  @IsInt()
  @IsNotEmpty()
  locomotive_id: number;

  @IsInt()
  @IsNotEmpty()
  route_id: number;

  @IsInt()
  @IsNotEmpty()
  carriage_count: number;
}
