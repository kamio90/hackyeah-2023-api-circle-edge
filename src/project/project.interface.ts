import { Document } from 'mongoose';

export interface Project extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
}
