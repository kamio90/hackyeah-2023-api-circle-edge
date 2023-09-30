import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Point } from './point.entity';

@Injectable()
export class PointRepository {
  constructor(
    @InjectModel(Point.name) private readonly pointModel: Model<Point>,
  ) {}

  async create(point: Point): Promise<Point> {
    const newPoint = new this.pointModel(point);
    return newPoint.save();
  }

  async findAll(page: number, limit: number): Promise<Point[]> {
    return this.pointModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<Point> {
    return this.pointModel.findById(id).exec();
  }
}
