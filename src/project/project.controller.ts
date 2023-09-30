import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() project: Project): Promise<Project> {
    return this.projectService.create(project);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Project[]> {
    return this.projectService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Project> {
    return this.projectService.findById(id);
  }
}
