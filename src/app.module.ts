import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateImageModule } from './create-image/create-image.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { OpenaiModule } from './open-ai/open-ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CreateImageModule,
    MongooseModule.forRoot(
      'mongodb://mongo:v7RyEaxoRcv8aGVtV24q@containers-us-west-209.railway.app:6094',
    ),
    CloudinaryModule,
    OpenaiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
