import { Document } from 'mongoose';

export interface DiscussionCircle extends Document {
  title: string;
  description: string;
  moderator: string;
  members: string[];
}
