import { Injectable } from '@nestjs/common';
import { CreateSystemDto } from '../dto/create-system.dto';
import { UpdateSystemDto } from '../dto/update-system.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemEntity } from '../entities/system.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemsService {
  constructor(@InjectRepository(SystemEntity) private systemRepo:Repository<SystemEntity>){}
  create(createSystemDto: CreateSystemDto,file:Express.Multer.File) {
    const {name,description,url,active}=createSystemDto;
    const system=new SystemEntity();
    system.name=name,
    system.description=description,
    system.url=url,
    system.link=file.path;
    system.active=active
    return this.systemRepo.save(system);
  }

  findAll() {
    return this.systemRepo.find();
    }

  findOne(id: number) {
    return this.systemRepo.findOneBy({
      id,
    });
  }

  update(id: number, updateSystemDto: UpdateSystemDto) {
 const {name,description,url,link,active} = updateSystemDto;
 const system =new SystemEntity({id});
 if(name){
  system.name=name;
 }
 if(description){
  system.description=description
 }
 if(url){
  system.url=url
 }
 if(link){
  system.link = link
 }
 if(active!==null){
  system.active = active
 }
 
return this.systemRepo.save(system);

  }

  remove(id: number) {
    return this.systemRepo.delete(id)
  }
}