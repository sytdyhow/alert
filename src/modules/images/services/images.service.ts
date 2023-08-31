import { Injectable } from '@nestjs/common';
import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from '../entities/image.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs'

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImageEntity) private imageRepo:Repository<ImageEntity>
  ){}
  create(createImageDto: CreateImageDto,file:Express.Multer.File) {
    const {name} =createImageDto;
    const images = new ImageEntity();
    images.name=name;
    images.link=file.path;
    return this.imageRepo.save(images);
  }

  findAll() {
    return this.imageRepo.find();
  }

  findOne(id: number) {
    return this.imageRepo
    .createQueryBuilder('image')
    .where('image.id=:id',{id})
    .getOne();
  }

  update(id:number, updateImageDto: UpdateImageDto) {
    const {name,link }=updateImageDto;
    const image = new ImageEntity({id});
    if(name){
      image.name=name;
    }
    if(link){
      image.link=link
    }
    return this.imageRepo.save(image);
  }

  async remove(id: number) {
    const image =await this.imageRepo.findOneBy({
      id,
    })
    const result =fs.unlinkSync(image.link);
    await this.imageRepo.remove(image);
    return 'deleted'
  }
}


