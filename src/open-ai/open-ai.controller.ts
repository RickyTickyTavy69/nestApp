import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { OpenAiService } from "./open-ai.service";
import { map } from "rxjs/operators";

@Controller("open-ai")
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async generateResponse(@Body() promptInfo: any) {
    console.log("info is", promptInfo);
    const response = await this.openAiService.generateResponse(
      promptInfo.PromptInfo.prompt
    );
    /*.pipe(
        map((response: AxiosResponse) => response.data.choices[0].text.trim()),
      ); */
    // ,console.log("response", response);
    return response;
  }
}
