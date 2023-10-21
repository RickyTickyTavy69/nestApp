import { v2, ConfigOptions } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name: 'djsldjzwa',
      api_key: '135425374448772',
      api_secret: 'xcelMpjOdq9gQGxHZ00wonW9J-E',
    });
  },
};
