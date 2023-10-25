import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import base64Example from "../constants/base64Example";

@Injectable()
export class OpenAiService {
  // private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly cloudinaryService: CloudinaryService
  ) {
    // this.apiKey = process.env.STABLE_KEY;
    this.apiUrl = "https://api.wizmodel.com/sdapi/v1/txt2img";
  }

  async generateResponse(prompt: string): Promise<any> {
    console.log("sending prompt", prompt);
    const reqData = {
      prompt,
      steps: 100,
      /* key: this.apiKey,
      prompt: prompt,
      width: '512',
      height: '512',
      samples: 1,
      num_inference_steps: '20',
      safety_checker: 'no',
      enhance_prompt: 'no',
      seed: null,
      guidance_scale: 7.5,
      webhook: null,
      track_id: null, */
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WIZMODEL}`,
    };
    const { data } = await firstValueFrom(
      this.httpService.post(this.apiUrl, reqData, {
        headers: headers,
      })
    );
    // console.log("data is", data.images[0]);
    const cloudinaryUrl = await this.cloudinaryService.uploadImage(
      data.images[0]
    );
    return {
      image: data.images[0],
      cloudinaryUrl,
    };
  }
}
