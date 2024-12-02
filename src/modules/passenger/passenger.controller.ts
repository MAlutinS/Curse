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
  import { PassengerService } from './passenger.service';
  import { CreatePassengerDto, UpdatePassengerDto } from './dto/passenger.dto';
  
  @Controller('passengers')
  export class PassengerController {
    constructor(private readonly passengerService: PassengerService) {}
  
    @Post()
    create(@Body() createPassengerDto: CreatePassengerDto) {
      return this.passengerService.create(createPassengerDto);
    }
  
    @Get()
    findAll() {
      return this.passengerService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.passengerService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updatePassengerDto: UpdatePassengerDto,
    ) {
      return this.passengerService.update(id, updatePassengerDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.passengerService.remove(id);
    }
  }