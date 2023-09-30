import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DevelopmentPath extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  duration: number;

  @Prop()
  difficulty: string;
}

export const DevelopmentPathSchema =
  SchemaFactory.createForClass(DevelopmentPath);
