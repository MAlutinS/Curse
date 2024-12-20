import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('passengers')
@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new passenger' })
  @ApiResponse({ status: 201, description: 'The passenger has been successfully created.' })
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengerService.create(createPassengerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all passengers' })
  @ApiResponse({ status: 200, description: 'Return all passengers.' })
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a passenger by ID' })
  @ApiResponse({ status: 200, description: 'Return the passenger.' })
  findOne(@Param('id') id: string) {
    return this.passengerService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a passenger by ID' })
  @ApiResponse({ status: 200, description: 'The passenger has been successfully updated.' })
  update(@Param('id') id: string, @Body() updatePassengerDto: UpdatePassengerDto) {
    return this.passengerService.update(+id, updatePassengerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a passenger by ID' })
  @ApiResponse({ status: 200, description: 'The passenger has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.passengerService.remove(+id);
  }
}