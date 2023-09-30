import { Injectable } from '@nestjs/common';
import { Training } from './trening.entity';
import { TrainingRepository } from './trening.repository';
@Injectable()
export class TrainingService {
  constructor(private readonly trainingRepository: TrainingRepository) {}

  async create(training: Training): Promise<Training> {
    return this.trainingRepository.create(training);
  }

  async findAll(page: number, limit: number): Promise<Training[]> {
    return this.trainingRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<Training> {
    return this.trainingRepository.findById(id);
  }
}
