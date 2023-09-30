import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository) {}

  async create(quiz: Quiz): Promise<Quiz> {
    return this.quizRepository.create(quiz);
  }

  async findAll(page: number, limit: number): Promise<Quiz[]> {
    return this.quizRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<Quiz> {
    return this.quizRepository.findById(id);
  }

  // Dodaj inne metody operacji na quizie
}
