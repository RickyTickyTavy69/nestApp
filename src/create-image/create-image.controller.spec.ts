import { Test, TestingModule } from '@nestjs/testing';
import { CreateImageController } from './create-image.controller';

describe('CreateImageController', () => {
  let controller: CreateImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateImageController],
    }).compile();

    controller = module.get<CreateImageController>(CreateImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
