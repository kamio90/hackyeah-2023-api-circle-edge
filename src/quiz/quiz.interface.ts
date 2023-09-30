import { Document } from 'mongoose';

export interface Quiz extends Document {
  title: string;
  description: string;
}
