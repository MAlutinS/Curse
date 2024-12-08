import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { CreateBrigadeDto } from './dto/create-brigade.dto';
import { UpdateBrigadeDto } from './dto/update-brigade.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('brigades')
@Controller('brigades')
export class BrigadeController {
  constructor(private readonly brigadeService: BrigadeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new brigade' })
  @ApiResponse({ status: 201, description: 'The brigade has been successfully created.' })
  create(@Body() createBrigadeDto: CreateBrigadeDto) {
    return this.brigadeService.create(createBrigadeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all brigades' })
  @ApiResponse({ status: 200, description: 'Return all brigades.' })
  findAll() {
    return this.brigadeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brigade by ID' })
  @ApiResponse({ status: 200, description: 'Return the brigade.' })
  findOne(@Param('id') id: string) {
    return this.brigadeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a brigade by ID' })
  @ApiResponse({ status: 200, description: 'The brigade has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateBrigadeDto: UpdateBrigadeDto) {
    return this.brigadeService.update(+id, updateBrigadeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a brigade by ID' })
  @ApiResponse({ status: 200, description: 'The brigade has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.brigadeService.remove(+id);
  }
}