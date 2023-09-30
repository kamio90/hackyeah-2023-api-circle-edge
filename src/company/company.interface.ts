import { Document } from 'mongoose';

export interface Company extends Document {
  name: string;
  address: string;
}
