import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageService } from './create-image.service';

@Controller('create-image')
export class CreateImageController {
  constructor(private createImageService: CreateImageService) {}
  @Post()
  async createImage(@Body() imageInfo) {
    const response = await this.createImageService.createImage(imageInfo);
    return response;
  }
}
