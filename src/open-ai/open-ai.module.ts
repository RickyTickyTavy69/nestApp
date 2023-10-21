import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { OpenAiController } from './open-ai.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [OpenAiService],
  controllers: [OpenAiController],
  exports: [OpenAiService],
})
export class OpenaiModule {}
