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
  import { TrainService } from './train.service';
  import { CreateTrainDto } from './dto/create-train.dto';
  import { UpdateTrainDto } from './dto/update-train.dto';
  @Controller('trains')
  export class TrainController {
    constructor(private readonly trainService: TrainService) {}
  
    @Post()
    create(@Body() createTrainDto: CreateTrainDto) {
      return this.trainService.create(createTrainDto);
    }
  
    @Get()
    findAll() {
      return this.trainService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.trainService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTrainDto: UpdateTrainDto,
    ) {
      return this.trainService.update(id, updateTrainDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.trainService.remove(id);
    }
  }