import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('trains')
@Controller('trains')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new train' })
  @ApiResponse({ status: 201, description: 'The train has been successfully created.' })
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.create(createTrainDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trains' })
  @ApiResponse({ status: 200, description: 'Return all trains.' })
  findAll() {
    return this.trainService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a train by ID' })
  @ApiResponse({ status: 200, description: 'Return the train.' })
  findOne(@Param('id') id: string) {
    return this.trainService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a train by ID' })
  @ApiResponse({ status: 200, description: 'The train has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainService.update(+id, updateTrainDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a train by ID' })
  @ApiResponse({ status: 200, description: 'The train has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.trainService.remove(+id);
  }
}