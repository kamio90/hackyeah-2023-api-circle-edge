import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PointController } from './point.controller';
import { PointService } from './point.service';
import { Point, PointSchema } from './point.entity';
import { PointRepository } from './point.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Point.name, schema: PointSchema }]),
  ],
  controllers: [PointController],
  providers: [PointService, PointRepository],
  exports: [PointService],
})
export class PointModule {}
