import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class JobOffer extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const JobOfferSchema = SchemaFactory.createForClass(JobOffer);
