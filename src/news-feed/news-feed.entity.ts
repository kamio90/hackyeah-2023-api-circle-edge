import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class NewsFeed extends Document {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  date: Date;

  @Prop()
  author: string;
}

export const NewsFeedSchema = SchemaFactory.createForClass(NewsFeed);
