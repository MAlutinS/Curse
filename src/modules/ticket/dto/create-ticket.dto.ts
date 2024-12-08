import { IsInt, IsNotEmpty, IsDate, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ description: 'Number of the route' })
  @IsInt()
  @IsNotEmpty()
  train_route_number: number;

  @ApiProperty({ description: 'Date of the purchase' })
  @IsDate()
  @IsNotEmpty()
  purchase_date: Date;

  @ApiProperty({ description: 'Cost of the ticket' })
  @IsNumber()
  @IsNotEmpty()
  ticket_cost: number;

  @ApiProperty({ description: 'Date of the departures' })
  @IsDate()
  @IsNotEmpty()
  departures_date: Date;

  @ApiProperty({ description: 'Id of the passenger' })
  @IsInt()
  @IsNotEmpty()
  passenger_id: number;

  @ApiProperty({ description: 'Status of the ticket' })
  @IsString()
  @IsNotEmpty()
  ticket_status: string;
}