import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TravelSheetService } from './travel_sheet.service';
import { CreateTravelSheetDto } from './dto/create-travel_sheet.dto';
import { UpdateTravelSheetDto } from './dto/update-travel_sheet.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('travel-sheets')
@Controller('travel-sheets')
export class TravelSheetController {
  constructor(private readonly travelSheetService: TravelSheetService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new travel sheet' })
  @ApiResponse({ status: 201, description: 'The travel sheet has been successfully created.' })
  create(@Body() createTravelSheetDto: CreateTravelSheetDto) {
    return this.travelSheetService.create(createTravelSheetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all travel sheets' })
  @ApiResponse({ status: 200, description: 'Return all travel sheets.' })
  findAll() {
    return this.travelSheetService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a travel sheet by ID' })
  @ApiResponse({ status: 200, description: 'Return the travel sheet.' })
  findOne(@Param('id') id: string) {
    return this.travelSheetService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a travel sheet by ID' })
  @ApiResponse({ status: 200, description: 'The travel sheet has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTravelSheetDto: UpdateTravelSheetDto) {
    return this.travelSheetService.update(+id, updateTravelSheetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a travel sheet by ID' })
  @ApiResponse({ status: 200, description: 'The travel sheet has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.travelSheetService.remove(+id);
  }
}