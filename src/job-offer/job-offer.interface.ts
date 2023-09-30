import { Document } from 'mongoose';

export interface JobOffer extends Document {
  title: string;
  description: string;
}
