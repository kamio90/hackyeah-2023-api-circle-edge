import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DevelopmentPath } from './development-path.entity';

@Injectable()
export class DevelopmentPathRepository {
  constructor(
    @InjectModel(DevelopmentPath.name)
    private readonly developmentPathModel: Model<DevelopmentPath>,
  ) {}

  async create(developmentPath: DevelopmentPath): Promise<DevelopmentPath> {
    const newDevelopmentPath = new this.developmentPathModel(developmentPath);
    return newDevelopmentPath.save();
  }

  async findAll(page: number, limit: number): Promise<DevelopmentPath[]> {
    return this.developmentPathModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<DevelopmentPath> {
    return this.developmentPathModel.findById(id).exec();
  }
}
