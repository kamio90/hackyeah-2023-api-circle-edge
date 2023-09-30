import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Point extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

export const PointSchema = SchemaFactory.createForClass(Point);
