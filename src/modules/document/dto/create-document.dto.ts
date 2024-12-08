import { IsInt, IsNotEmpty, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty({ description: 'Series of the document' })
  @IsInt()
  @IsNotEmpty()
  document_series: number;

  @ApiProperty({ description: 'Number of the document' })
  @IsInt()
  @IsNotEmpty()
  document_number: number;

  @ApiProperty({ description: 'Date of issue of the document' })
  @IsDate()
  @IsNotEmpty()
  document_issue_date: Date;

  @ApiProperty({ description: 'Gender' })
  @IsString()
  @IsNotEmpty()
  gender: string;
}