import { IsInt, IsNotEmpty, IsDate, IsString, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsInt()
  @IsNotEmpty()
  train_route_number: number;

  @IsDate()
  @IsNotEmpty()
  purchase_date: Date;

  @IsNumber()
  @IsNotEmpty()
  ticket_cost: number;

  @IsDate()
  @IsNotEmpty()
  departures_date: Date;

  @IsInt()
  @IsNotEmpty()
  passenger_id: number;

  @IsString()
  @IsNotEmpty()
  ticket_status: string;
}