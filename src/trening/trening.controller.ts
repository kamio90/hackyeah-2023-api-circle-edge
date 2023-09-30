import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { TrainingService } from './trening.service';
import { Training } from './trening.interface';

@Controller('trening')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  async create(@Body() training: Training): Promise<Training> {
    return this.trainingService.create(training);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Training[]> {
    return this.trainingService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Training> {
    return this.trainingService.findById(id);
  }
}
