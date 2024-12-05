import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WagonService } from './wagon.service';
import { CreateWagonDto } from './dto/create-wagon.dto';
import { UpdateWagonDto } from './dto/update-wagon.dto';

@Controller('wagons')
export class WagonController {
  constructor(private readonly wagonService: WagonService) {}

  @Post()
  create(@Body() createWagonDto: CreateWagonDto) {
    return this.wagonService.create(createWagonDto);
  }

  @Get()
  findAll() {
    return this.wagonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wagonService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWagonDto: UpdateWagonDto) {
    return this.wagonService.update(+id, updateWagonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wagonService.remove(+id);
  }
}