import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { NewsFeed } from './news-feed.entity';
import { NewsFeedService } from './news-feed.service';

@Controller('news-feeds')
export class NewsFeedController {
  constructor(private readonly newsFeedService: NewsFeedService) {}

  @Post()
  async create(@Body() newsFeed: NewsFeed): Promise<NewsFeed> {
    return this.newsFeedService.create(newsFeed);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<NewsFeed[]> {
    return this.newsFeedService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<NewsFeed> {
    return this.newsFeedService.findById(id);
  }
}
