import { IsString,IsNotEmpty, IsDate } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  @IsNotEmpty()
  document_number: string;

  @IsString()
  @IsNotEmpty()
  series: string;

  @IsDate()
  @IsNotEmpty()
  issue_date: Date;
}
