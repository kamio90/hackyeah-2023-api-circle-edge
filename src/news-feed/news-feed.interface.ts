import { Document } from 'mongoose';

export interface NewsFeed extends Document {
  title: string;
  content: string;
  date: Date;
  author: string;
}
