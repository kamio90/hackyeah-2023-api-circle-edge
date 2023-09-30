import { Document } from 'mongoose';

export interface Training extends Document {
  title: string;
  description: string;
  companyLogo: string;
  price: string;
  link: string;
  treningDesc: string;
}
