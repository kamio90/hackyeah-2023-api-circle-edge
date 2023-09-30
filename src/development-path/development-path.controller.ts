import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { DevelopmentPath } from './development-path.entity';
import { DevelopmentPathService } from './development-path.service';

@Controller('development-path')
export class DevelopmentPathController {
  constructor(
    private readonly developmentPathService: DevelopmentPathService,
  ) {}

  @Post()
  async create(
    @Body() developmentPath: DevelopmentPath,
  ): Promise<DevelopmentPath> {
    return this.developmentPathService.create(developmentPath);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<DevelopmentPath[]> {
    return this.developmentPathService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<DevelopmentPath> {
    return this.developmentPathService.findById(id);
  }
}
