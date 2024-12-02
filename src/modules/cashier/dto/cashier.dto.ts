import { IsString, IsInt } from 'class-validator';

export class CreateCashierDto {
  @IsString()
  cashier_number: string;

  @IsInt()
  employee_id: number;

  @IsString()
  status: string;

  @IsString()
  station: string;
}

export class UpdateCashierDto {
  @IsString()
  cashier_number?: string;

  @IsInt()
  employee_id?: number;

  @IsString()
  status?: string;

  @IsString()
  station?: string;
}