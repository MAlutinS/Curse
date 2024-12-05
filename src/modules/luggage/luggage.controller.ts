import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LuggageService } from './luggage.service';
import { CreateLuggageDto } from './dto/create-luggage.dto';
import { UpdateLuggageDto } from './dto/update-luggage.dto';

@Controller('luggages')
export class LuggageController {
  constructor(private readonly luggageService: LuggageService) {}

  @Post()
  create(@Body() createLuggageDto: CreateLuggageDto) {
    return this.luggageService.create(createLuggageDto);
  }

  @Get()
  findAll() {
    return this.luggageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.luggageService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLuggageDto: UpdateLuggageDto) {
    return this.luggageService.update(+id, updateLuggageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.luggageService.remove(+id);
  }
}