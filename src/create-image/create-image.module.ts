import { Module } from '@nestjs/common';
import { CreateImageService } from './create-image.service';
import { CreateImageController } from './create-image.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema, Image } from './schemas/image.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  ],
  providers: [CreateImageService],
  controllers: [CreateImageController],
})
export class CreateImageModule {}
