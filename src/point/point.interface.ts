import { Document } from 'mongoose';

export interface Point extends Document {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}
