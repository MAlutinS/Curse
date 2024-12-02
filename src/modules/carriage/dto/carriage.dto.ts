import { IsString, IsInt } from 'class-validator';

export class CreateCarriageDto {
  @IsString()
  type: string;

  @IsString()
  side_number: string;

  @IsString()
  conductor_employee_number: string;

  @IsInt()
  locomotive_id: number;
}

export class UpdateCarriageDto {
  @IsString()
  type?: string;

  @IsString()
  side_number?: string;

  @IsString()
  conductor_employee_number?: string;

  @IsInt()
  locomotive_id?: number;
}