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
  import { CarriageService } from './carriage.service';
  import { CreateCarriageDto, UpdateCarriageDto } from './dto/carriage.dto';
  
  @Controller('carriages')
  export class CarriageController {
    constructor(private readonly carriageService: CarriageService) {}
  
    @Post()
    create(@Body() createCarriageDto: CreateCarriageDto) {
      return this.carriageService.create(createCarriageDto);
    }
  
    @Get()
    findAll() {
      return this.carriageService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.carriageService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateCarriageDto: UpdateCarriageDto,
    ) {
      return this.carriageService.update(id, updateCarriageDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.carriageService.remove(id);
    }
  }