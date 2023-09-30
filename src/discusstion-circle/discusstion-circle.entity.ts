import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DiscussionCircle extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  moderator: string;

  @Prop()
  members: string[];
}

export const DiscussionCircleSchema =
  SchemaFactory.createForClass(DiscussionCircle);
