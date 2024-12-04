import { IsString, IsInt, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  ticket_number: string;

  @IsInt()
  @IsNotEmpty()
  train_id: number;

  @IsInt()
  @IsNotEmpty()
  passenger_id: number;

  @IsDate()
  @IsNotEmpty()
  purchase_date: Date;

  @IsInt()
  @IsNotEmpty()
  route_id: number;

  @IsNumber()
  @IsNotEmpty()
  fare: number;
}