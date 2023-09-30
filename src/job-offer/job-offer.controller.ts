import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { JobOffer } from './job-offer.entity';
import { JobOfferService } from './job-offer.service';

@Controller('job-offer')
export class JobOfferController {
  constructor(private readonly jobOfferService: JobOfferService) {}

  @Post()
  async create(@Body() jobOffer: JobOffer): Promise<JobOffer> {
    return this.jobOfferService.create(jobOffer);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<JobOffer[]> {
    return this.jobOfferService.findAll(page, limit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<JobOffer> {
    return this.jobOfferService.findById(id);
  }
}
