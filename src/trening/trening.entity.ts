import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Training extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
