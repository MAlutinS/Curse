import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateWagonDto {
  @IsInt()
  @IsNotEmpty()
  wagon_side_number: number;

  @IsInt()
  @IsNotEmpty()
  conductor_id: number;

  @IsInt()
  @IsNotEmpty()
  train_id: number;
}