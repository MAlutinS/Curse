import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainDto {
  @ApiProperty({ description: 'Number of the route' })
  @IsInt()
  @IsNotEmpty()
  train_route_number: number;

  @ApiProperty({ description: 'Id of the locomotive' })
  @IsInt()
  @IsNotEmpty()
  train_locomotive_id: number;

  @ApiProperty({ description: 'Length of the train' })
  @IsInt()
  @IsNotEmpty()
  train_length: number;
}