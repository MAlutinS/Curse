import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';

export class CreateLocomotiveDto {
  @IsString()
  @IsNotEmpty()
  locomotive_type: string;

  @IsString()
  @IsNotEmpty()
  locomotive_condition: string;

  @IsDate()
  @IsNotEmpty()
  last_tech_inspection: Date;

  @IsInt()
  @IsNotEmpty()
  repair_brigade_id: number;
}