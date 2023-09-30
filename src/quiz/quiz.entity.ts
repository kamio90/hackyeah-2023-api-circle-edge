import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Quiz extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
