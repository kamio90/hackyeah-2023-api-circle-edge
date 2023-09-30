import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Training } from './trening.entity';

@Injectable()
export class TrainingRepository {
  constructor(
    @InjectModel(Training.name) private readonly trainingModel: Model<Training>,
  ) {}

  async create(training: Training): Promise<Training> {
    const newTraining = new this.trainingModel(training);
    return newTraining.save();
  }

  async findAll(page: number, limit: number): Promise<Training[]> {
    return this.trainingModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<Training> {
    return this.trainingModel.findById(id).exec();
  }
}
