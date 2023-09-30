import { Injectable } from '@nestjs/common';
import { NewsFeed } from './news-feed.entity';
import { NewsFeedRepository } from './news-feed.repository';

@Injectable()
export class NewsFeedService {
  constructor(private readonly newsFeedRepository: NewsFeedRepository) {}

  async create(newsFeed: NewsFeed): Promise<NewsFeed> {
    return this.newsFeedRepository.create(newsFeed);
  }

  async findAll(page: number, limit: number): Promise<NewsFeed[]> {
    return this.newsFeedRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<NewsFeed> {
    return this.newsFeedRepository.findById(id);
  }
}
