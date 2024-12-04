import { IsString,IsNotEmpty, IsInt } from 'class-validator';

export class CreateCarriageDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  side_number: string;

  @IsString()
  @IsNotEmpty()
  conductor_employee_number: string;

  @IsInt()
  @IsNotEmpty()
  locomotive_id: number;
}
