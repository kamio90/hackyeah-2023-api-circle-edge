import { Document } from 'mongoose';

export interface Event extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
}
