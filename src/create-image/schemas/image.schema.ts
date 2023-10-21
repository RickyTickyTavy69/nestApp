import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
  @Prop()
  image: string;

  @Prop()
  username: string;

  @Prop()
  createdDate: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
