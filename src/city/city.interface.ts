import { Document } from 'mongoose';

export interface City extends Document {
  name: string;
  population: number;
}
