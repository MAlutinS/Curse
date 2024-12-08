import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateBrigadeDto {
  @ApiProperty({ description: 'Id of the brigade chief' })
  @IsInt()
  @IsNotEmpty()
  brigade_chief_id: number;

  @ApiProperty({ description: 'Id of the brigade department' })
  @IsInt()
  @IsNotEmpty()
  brigade_department_id: number;
}