import { Injectable } from '@nestjs/common';
import { DiscussionCircle } from './discusstion-circle.entity';
import { DiscussionCircleRepository } from './discusstion-circle.repository';

@Injectable()
export class DiscussionCircleService {
  constructor(
    private readonly discussionCircleRepository: DiscussionCircleRepository,
  ) {}

  async create(discussionCircle: DiscussionCircle): Promise<DiscussionCircle> {
    return this.discussionCircleRepository.create(discussionCircle);
  }

  async findAll(page: number, limit: number): Promise<DiscussionCircle[]> {
    return this.discussionCircleRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<DiscussionCircle> {
    return this.discussionCircleRepository.findById(id);
  }
}
