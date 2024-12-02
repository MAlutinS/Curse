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
  import { RouteService } from './route.service';
  import { CreateRouteDto, UpdateRouteDto } from './dto/route.dto';
  
  @Controller('routes')
  export class RouteController {
    constructor(private readonly routeService: RouteService) {}
  
    @Post()
    create(@Body() createRouteDto: CreateRouteDto) {
      return this.routeService.create(createRouteDto);
    }
  
    @Get()
    findAll() {
      return this.routeService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.routeService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateRouteDto: UpdateRouteDto,
    ) {
      return this.routeService.update(id, updateRouteDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.routeService.remove(id);
    }
  }