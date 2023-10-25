import { Module } from "@nestjs/common";
import { OpenAiService } from "./open-ai.service";
import { OpenAiController } from "./open-ai.controller";
import { HttpModule } from "@nestjs/axios";
import { CloudinaryModule } from "../cloudinary/cloudinary.module";

@Module({
  imports: [HttpModule, CloudinaryModule],
  providers: [OpenAiService],
  controllers: [OpenAiController],
  exports: [OpenAiService],
})
export class OpenaiModule {}
