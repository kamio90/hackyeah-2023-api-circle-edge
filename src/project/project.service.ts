import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectRepository } from './project.repository';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(project: Project): Promise<Project> {
    return this.projectRepository.create(project);
  }

  async findAll(page: number, limit: number): Promise<Project[]> {
    return this.projectRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<Project> {
    return this.projectRepository.findById(id);
  }
}
