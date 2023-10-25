import { Injectable } from "@nestjs/common";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Injectable()
export class AssetsService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  async getAll() {
    const assets = await this.cloudinaryService.getAllAssets();
    return assets;
  }
}
