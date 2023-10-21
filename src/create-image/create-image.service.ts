import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Image, ImageDocument } from './schemas/image.schema';
import { Model } from 'mongoose';

@Injectable()
export class CreateImageService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}
  async createImage(info) {
    const newImage = new this.imageModel(info);
    const response = await newImage.save();
    return response;
  }
}
