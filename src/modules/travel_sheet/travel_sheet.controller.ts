import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TravelSheetService } from './travel_sheet.service';
import { CreateTravelSheetDto } from './dto/create-travel_sheet.dto';
import { UpdateTravelSheetDto } from './dto/update-travel_sheet.dto';

@Controller('travel-sheets')
export class TravelSheetController {
  constructor(private readonly travelSheetService: TravelSheetService) {}

  @Post()
  create(@Body() createTravelSheetDto: CreateTravelSheetDto) {
    return this.travelSheetService.create(createTravelSheetDto);
  }

  @Get()
  findAll() {
    return this.travelSheetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelSheetService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTravelSheetDto: UpdateTravelSheetDto) {
    return this.travelSheetService.update(+id, updateTravelSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelSheetService.remove(+id);
  }
}