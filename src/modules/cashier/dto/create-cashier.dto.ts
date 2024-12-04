import { IsString,IsNotEmpty, IsInt } from 'class-validator';

export class CreateCashierDto {
  @IsString()
  @IsNotEmpty()
  cashier_number: string;

  @IsInt()
  @IsNotEmpty()
  employee_id: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  station: string;
}