import { Injectable } from '@nestjs/common';
import { Point } from './point.entity';
import { PointRepository } from './point.repository';

@Injectable()
export class PointService {
  constructor(private readonly pointRepository: PointRepository) {}

  async create(point: Point): Promise<Point> {
    return this.pointRepository.create(point);
  }

  async findAll(page: number, limit: number): Promise<Point[]> {
    return this.pointRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<Point> {
    return this.pointRepository.findById(id);
  }
}
