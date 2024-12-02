import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateTrainDto {
  @IsString()
  train_number: string;

  @IsString()
  day_of_operation: string;

  @IsInt()
  locomotive_id: number;

  @IsInt()
  route_id: number;

  @IsInt()
  carriage_count: number;
}

export class UpdateTrainDto {
  @IsOptional()
  @IsString()
  train_number?: string;

  @IsOptional()
  @IsString()
  day_of_operation?: string;

  @IsOptional()
  @IsInt()
  locomotive_id?: number;

  @IsOptional()
  @IsInt()
  route_id?: number;

  @IsOptional()
  @IsInt()
  carriage_count?: number;
}