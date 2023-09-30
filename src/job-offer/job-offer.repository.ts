import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JobOffer } from './job-offer.entity';

@Injectable()
export class JobOfferRepository {
  constructor(
    @InjectModel(JobOffer.name) private readonly jobOfferModel: Model<JobOffer>,
  ) {}

  async create(jobOffer: JobOffer): Promise<JobOffer> {
    const newJobOffer = new this.jobOfferModel(jobOffer);
    return newJobOffer.save();
  }

  async findAll(page: number, limit: number): Promise<JobOffer[]> {
    return this.jobOfferModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findById(id: string): Promise<JobOffer> {
    return this.jobOfferModel.findById(id).exec();
  }
}
