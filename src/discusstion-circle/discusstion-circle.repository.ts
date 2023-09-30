import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DiscussionCircle } from './discusstion-circle.entity';

@Injectable()
export class DiscussionCircleRepository {
  constructor(
    @InjectModel(DiscussionCircle.name)
    private readonly discussionCircleModel: Model<DiscussionCircle>,
  ) {}

  async create(discussionCircle: DiscussionCircle): Promise<DiscussionCircle> {
    const newDiscussionCircle = new this.discussionCircleModel(
      discussionCircle,
    );
    return newDiscussionCircle.save();
  }

  async findAll(page: number, limit: number): Promise<DiscussionCircle[]> {
    return this.discussionCircleModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<DiscussionCircle> {
    return this.discussionCircleModel.findById(id).exec();
  }
}
