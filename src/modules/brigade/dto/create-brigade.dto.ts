import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBrigadeDto {
  @IsInt()
  @IsNotEmpty()
  brigade_chief_id: number;

  @IsInt()
  @IsNotEmpty()
  brigade_department_id: number;
}