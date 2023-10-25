import { Injectable } from "@nestjs/common";
import { UploadApiErrorResponse, UploadApiResponse, v2 } from "cloudinary";
import toStream = require("buffer-to-stream");
@Injectable()
export class CloudinaryService {
  async uploadImage(file: string): Promise<any> {
    // later I must save userId, prompt and the url of the picture to mongoDB to be able to get those pictures in the app.
    try {
      const base64png = `data:image/png;base64,${file}`;
      const upload = await v2.uploader.upload(base64png);
      console.log("uploaded in nest cloud", upload);
      return upload.url;
    } catch (e) {
      console.log("error occured", e);
    }
  }
  async getAllAssets() {
    const assets = await v2.api.resources({ all: true });
    return assets;
  }
}
