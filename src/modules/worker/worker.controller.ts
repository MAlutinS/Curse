import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('workers')
@Controller('workers')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new worker' })
  @ApiResponse({ status: 201, description: 'The worker has been successfully created.' })
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all workers' })
  @ApiResponse({ status: 200, description: 'Return all workers.' })
  findAll() {
    return this.workerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a worker by ID' })
  @ApiResponse({ status: 200, description: 'Return the worker.' })
  findOne(@Param('id') id: string) {
    return this.workerService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a worker by ID' })
  @ApiResponse({ status: 200, description: 'The worker has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(+id, updateWorkerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a worker by ID' })
  @ApiResponse({ status: 200, description: 'The worker has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.workerService.remove(+id);
  }
}