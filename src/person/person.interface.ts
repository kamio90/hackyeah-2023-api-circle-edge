import { Document } from 'mongoose';

export interface Person extends Document {
  firstName: string;
  lastName: string;
}
