import { Module } from '@nestjs/common';
import { ImagesService } from './services/images.service';
import { ImagesController } from './controllers/images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './entities/image.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ImageEntity])],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
