import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { City } from './city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() city: City): Promise<City> {
    return this.cityService.create(city);
  }

  @Get()
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<City> {
    return this.cityService.findById(id);
  }
}
