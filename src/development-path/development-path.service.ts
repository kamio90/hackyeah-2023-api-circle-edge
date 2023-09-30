import { Injectable } from '@nestjs/common';
import { DevelopmentPath } from './development-path.entity';
import { DevelopmentPathRepository } from './development-path.repository';

@Injectable()
export class DevelopmentPathService {
  constructor(
    private readonly developmentPathRepository: DevelopmentPathRepository,
  ) {}

  async create(developmentPath: DevelopmentPath): Promise<DevelopmentPath> {
    return this.developmentPathRepository.create(developmentPath);
  }

  async findAll(page: number, limit: number): Promise<DevelopmentPath[]> {
    return this.developmentPathRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<DevelopmentPath> {
    return this.developmentPathRepository.findById(id);
  }
}
