import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobOfferController } from './job-offer.controller';
import { JobOfferService } from './job-offer.service';
import { JobOffer, JobOfferSchema } from './job-offer.entity';
import { JobOfferRepository } from './job-offer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: JobOffer.name, schema: JobOfferSchema },
    ]),
  ],
  controllers: [JobOfferController],
  providers: [JobOfferService, JobOfferRepository],
  exports: [JobOfferService],
})
export class JobOfferModule {}
