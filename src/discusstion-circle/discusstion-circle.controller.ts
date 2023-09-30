import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { DiscussionCircle } from './discusstion-circle.entity';
import { DiscussionCircleService } from './discusstion-circle.service';

@Controller('discussion-circles')
export class DiscussionCircleController {
  constructor(
    private readonly discussionCircleService: DiscussionCircleService,
  ) {}

  @Post()
  async create(
    @Body() discussionCircle: DiscussionCircle,
  ): Promise<DiscussionCircle> {
    return this.discussionCircleService.create(discussionCircle);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<DiscussionCircle[]> {
    return this.discussionCircleService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<DiscussionCircle> {
    return this.discussionCircleService.findById(id);
  }
}
