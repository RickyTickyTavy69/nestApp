import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { OpenaiModule } from "./open-ai/open-ai.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env-example",
    }),
    MongooseModule.forRoot(
      "mongodb://mongo:v7RyEaxoRcv8aGVtV24q@containers-us-west-209.railway.app:6094"
    ),
    CloudinaryModule,
    OpenaiModule,
    AuthModule,
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
