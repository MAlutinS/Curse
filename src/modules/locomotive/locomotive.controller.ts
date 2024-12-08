import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LocomotiveService } from './locomotive.service';
import { CreateLocomotiveDto } from './dto/create-locomotive.dto';
import { UpdateLocomotiveDto } from './dto/update-locomotive.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('locomotives')
@Controller('locomotives')
export class LocomotiveController {
  constructor(private readonly locomotiveService: LocomotiveService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new locomotive' })
  @ApiResponse({ status: 201, description: 'The locomotive has been successfully created.' })
  create(@Body() createLocomotiveDto: CreateLocomotiveDto) {
    return this.locomotiveService.create(createLocomotiveDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locomotives' })
  @ApiResponse({ status: 200, description: 'Return all locomotives.' })
  findAll() {
    return this.locomotiveService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a locomotive by ID' })
  @ApiResponse({ status: 200, description: 'Return the locomotive.' })
  findOne(@Param('id') id: string) {
    return this.locomotiveService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a locomotive by ID' })
  @ApiResponse({ status: 200, description: 'The locomotive has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateLocomotiveDto: UpdateLocomotiveDto) {
    return this.locomotiveService.update(+id, updateLocomotiveDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a locomotive by ID' })
  @ApiResponse({ status: 200, description: 'The locomotive has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.locomotiveService.remove(+id);
  }
}