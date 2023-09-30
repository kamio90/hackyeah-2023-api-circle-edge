import { Document } from 'mongoose';

export interface UE extends Document {
  name: string;
  country: string;
}
