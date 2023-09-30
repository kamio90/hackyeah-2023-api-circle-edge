import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Point } from './point.entity';
import { PointService } from './point.service';

@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Post()
  async create(@Body() point: Point): Promise<Point> {
    return this.pointService.create(point);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Point[]> {
    return this.pointService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Point> {
    return this.pointService.findById(id);
  }
}
