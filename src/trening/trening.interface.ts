import { Document } from 'mongoose';

export interface Training extends Document {
  title: string;
  description: string;
}
