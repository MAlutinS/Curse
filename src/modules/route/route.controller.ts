import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('routes')
@Controller('routes')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new route' })
  @ApiResponse({ status: 201, description: 'The route has been successfully created.' })
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routeService.create(createRouteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all routes' })
  @ApiResponse({ status: 200, description: 'Return all routes.' })
  findAll() {
    return this.routeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a route by ID' })
  @ApiResponse({ status: 200, description: 'Return the route.' })
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a route by ID' })
  @ApiResponse({ status: 200, description: 'The route has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routeService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a route by ID' })
  @ApiResponse({ status: 200, description: 'The route has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.routeService.remove(+id);
  }
}