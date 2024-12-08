import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateWagonDto {
  @ApiProperty({ description: 'Side number of the wagon' })
  @IsInt()
  @IsNotEmpty()
  wagon_side_number: number;

  @ApiProperty({ description: 'ID of the conductor' })
  @IsInt()
  @IsNotEmpty()
  conductor_id: number;

  @ApiProperty({ description: 'ID of the train' })
  @IsInt()
  @IsNotEmpty()
  train_id: number;
}