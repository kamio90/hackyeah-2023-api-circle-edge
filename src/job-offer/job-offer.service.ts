import { Injectable } from '@nestjs/common';
import { JobOffer } from './job-offer.entity';
import { JobOfferRepository } from './job-offer.repository';

@Injectable()
export class JobOfferService {
  constructor(private readonly jobOfferRepository: JobOfferRepository) {}

  async create(jobOffer: JobOffer): Promise<JobOffer> {
    return this.jobOfferRepository.create(jobOffer);
  }

  async findAll(page: number, limit: number): Promise<JobOffer[]> {
    return this.jobOfferRepository.findAll(page, limit);
  }

  async findById(id: string): Promise<JobOffer> {
    return this.jobOfferRepository.findById(id);
  }
}
