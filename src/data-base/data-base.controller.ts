import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DataBaseService } from './data-base.service';
import { DataCreateDto } from './data-base.dto';

@Controller('data-base')
export class DataBaseController {
  constructor(private readonly dataBaseService: DataBaseService) {}

  @Get()
  findAll(){
    return this.dataBaseService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe)
  create(@Body() dto: DataCreateDto){
    return this.dataBaseService.create(dto);
  }
}
