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
  import { CashierService } from './cashier.service';
  import { CreateCashierDto, UpdateCashierDto } from './dto/cashier.dto';
  
  @Controller('cashiers')
  export class CashierController {
    constructor(private readonly cashierService: CashierService) {}
  
    @Post()
    create(@Body() createCashierDto: CreateCashierDto) {
      return this.cashierService.create(createCashierDto);
    }
  
    @Get()
    findAll() {
      return this.cashierService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.cashierService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateCashierDto: UpdateCashierDto,
    ) {
      return this.cashierService.update(id, updateCashierDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.cashierService.remove(id);
    }
  }