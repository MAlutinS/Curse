import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateTrainDto {
  @IsInt()
  @IsNotEmpty()
  train_route_number: number;

  @IsInt()
  @IsNotEmpty()
  train_locomotive_id: number;

  @IsInt()
  @IsNotEmpty()
  train_length: number;
}