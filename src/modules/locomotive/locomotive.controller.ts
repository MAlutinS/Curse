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
  import { LocomotiveService } from './locomotive.service';
  import { CreateLocomotiveDto, UpdateLocomotiveDto } from './dto/locomotive.dto';
  
  @Controller('locomotives')
  export class LocomotiveController {
    constructor(private readonly locomotiveService: LocomotiveService) {}
  
    @Post()
    create(@Body() createLocomotiveDto: CreateLocomotiveDto) {
      return this.locomotiveService.create(createLocomotiveDto);
    }
  
    @Get()
    findAll() {
      return this.locomotiveService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.locomotiveService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateLocomotiveDto: UpdateLocomotiveDto,
    ) {
      return this.locomotiveService.update(id, updateLocomotiveDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.locomotiveService.remove(id);
    }
  }