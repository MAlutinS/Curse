import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    ParseIntPipe,
  } from '@nestjs/common';
  import { LuggageService } from './luggage.service';
  import { CreateLuggageDto, UpdateLuggageDto } from './dto/luggage.dto';
  
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
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.luggageService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateLuggageDto: UpdateLuggageDto,
    ) {
      return this.luggageService.update(id, updateLuggageDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.luggageService.remove(id);
    }
  }