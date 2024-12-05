import { IsString, IsNotEmpty, IsInt, IsDate } from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsInt()
  @IsNotEmpty()
  department_id: number;

  @IsInt()
  @IsNotEmpty()
  brigade_id: number;

  @IsString()
  @IsNotEmpty()
  qualification: string;

  @IsDate()
  @IsNotEmpty()
  medical_examination: Date;
}