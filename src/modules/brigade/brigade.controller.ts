import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BrigadeService } from './brigade.service';
import { CreateBrigadeDto } from './dto/create-brigade.dto';
import { UpdateBrigadeDto } from './dto/update-brigade.dto';

@Controller('brigades')
export class BrigadeController {
  constructor(private readonly brigadeService: BrigadeService) {}

  @Post()
  create(@Body() createBrigadeDto: CreateBrigadeDto) {
    return this.brigadeService.create(createBrigadeDto);
  }

  @Get()
  findAll() {
    return this.brigadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brigadeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBrigadeDto: UpdateBrigadeDto) {
    return this.brigadeService.update(+id, updateBrigadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brigadeService.remove(+id);
  }
}