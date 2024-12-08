import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WagonService } from './wagon.service';
import { CreateWagonDto } from './dto/create-wagon.dto';
import { UpdateWagonDto } from './dto/update-wagon.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('wagons')
@Controller('wagons')
export class WagonController {
  constructor(private readonly wagonService: WagonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new wagon' })
  @ApiResponse({ status: 201, description: 'The wagon has been successfully created.' })
  create(@Body() createWagonDto: CreateWagonDto) {
    return this.wagonService.create(createWagonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all wagons' })
  @ApiResponse({ status: 200, description: 'Return all wagons.' })
  findAll() {
    return this.wagonService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a wagon by ID' })
  @ApiResponse({ status: 200, description: 'Return the wagon.' })
  findOne(@Param('id') id: string) {
    return this.wagonService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a wagon by ID' })
  @ApiResponse({ status: 200, description: 'The wagon has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateWagonDto: UpdateWagonDto) {
    return this.wagonService.update(+id, updateWagonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a wagon by ID' })
  @ApiResponse({ status: 200, description: 'The wagon has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.wagonService.remove(+id);
  }
}