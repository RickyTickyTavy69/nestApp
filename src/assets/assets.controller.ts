import { Controller, Get } from "@nestjs/common";
import { AssetsService } from "./assets.service";

@Controller("assets")
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async getAssets() {
    const assets = await this.assetsService.getAll();
    return assets;
  }
}
