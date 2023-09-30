import { Document } from 'mongoose';

export interface DevelopmentPath extends Document {
  title: string;
  description: string;
  duration: number;
  difficulty: string;
}
