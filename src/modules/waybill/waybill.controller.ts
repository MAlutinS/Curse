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
  import { WaybillService } from './waybill.service';
  import { CreateWaybillDto, UpdateWaybillDto } from './dto/waybill.dto';
  
  @Controller('waybills')
  export class WaybillController {
    constructor(private readonly waybillService: WaybillService) {}
  
    @Post()
    create(@Body() createWaybillDto: CreateWaybillDto) {
      return this.waybillService.create(createWaybillDto);
    }
  
    @Get()
    findAll() {
      return this.waybillService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.waybillService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateWaybillDto: UpdateWaybillDto,
    ) {
      return this.waybillService.update(id, updateWaybillDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.waybillService.remove(id);
    }
  }