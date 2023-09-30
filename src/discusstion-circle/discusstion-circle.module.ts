import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscussionCircleController } from './discusstion-circle.controller';
import { DiscussionCircleService } from './discusstion-circle.service';
import {
  DiscussionCircle,
  DiscussionCircleSchema,
} from './discusstion-circle.entity';
import { DiscussionCircleRepository } from './discusstion-circle.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DiscussionCircle.name, schema: DiscussionCircleSchema },
    ]),
  ],
  controllers: [DiscussionCircleController],
  providers: [DiscussionCircleService, DiscussionCircleRepository],
  exports: [DiscussionCircleService],
})
export class DiscussionCircleModule {}
