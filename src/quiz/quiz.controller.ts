import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async create(@Body() quiz: Quiz): Promise<Quiz> {
    return this.quizService.create(quiz);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Quiz[]> {
    return this.quizService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Quiz> {
    return this.quizService.findById(id);
  }
}
