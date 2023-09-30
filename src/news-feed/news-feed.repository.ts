import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NewsFeed } from './news-feed.entity';

@Injectable()
export class NewsFeedRepository {
  constructor(
    @InjectModel(NewsFeed.name) private readonly newsFeedModel: Model<NewsFeed>,
  ) {}

  async create(newsFeed: NewsFeed): Promise<NewsFeed> {
    const newNewsFeed = new this.newsFeedModel(newsFeed);
    return newNewsFeed.save();
  }

  async findAll(page: number, limit: number): Promise<NewsFeed[]> {
    return this.newsFeedModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<NewsFeed> {
    return this.newsFeedModel.findById(id).exec();
  }
}
