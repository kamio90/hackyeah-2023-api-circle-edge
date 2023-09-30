import { Document } from 'mongoose';

export interface JobOffer extends Document {
  title: string;
  description: string;
  localization: string;
  contract: string;
  skill: string;
  stack: string[];
  companyLogo: string;
}
