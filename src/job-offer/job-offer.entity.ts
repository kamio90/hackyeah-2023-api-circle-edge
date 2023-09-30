import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class JobOffer extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  localization: string;

  @Prop()
  contract: string;

  @Prop()
  skill: string;

  @Prop([String])
  stack: string[];

  @Prop()
  companyLogo: string;
}

export const JobOfferSchema = SchemaFactory.createForClass(JobOffer);
