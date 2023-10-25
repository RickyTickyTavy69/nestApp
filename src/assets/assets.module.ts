import { Module } from "@nestjs/common";
import { AssetsController } from "./assets.controller";
import { AssetsService } from "./assets.service";
import { CloudinaryModule } from "../cloudinary/cloudinary.module";

@Module({
  imports: [CloudinaryModule],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
