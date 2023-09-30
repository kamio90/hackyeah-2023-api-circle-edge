import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizRepository {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<Quiz>,
  ) {}

  async create(quiz: Quiz): Promise<Quiz> {
    const newQuiz = new this.quizModel(quiz);
    return newQuiz.save();
  }

  async findAll(page: number, limit: number): Promise<Quiz[]> {
    return this.quizModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<Quiz> {
    return this.quizModel.findById(id).exec();
  }
}
