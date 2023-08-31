import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from '../entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity) private roleRepo:Repository<RoleEntity>
  ){}
  create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(
      new RoleEntity({
        name:createRoleDto.name,
      })
    )
  }

  findAll() {
    return this.roleRepo.find()
  }

  findOne(id: number) {
    return this.roleRepo.findOneBy({
      id,
    })
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
   const {name}=updateRoleDto;
   const role=new RoleEntity({id});

   if(name){
    role.name=name
   }
   return this.roleRepo.save(role);

  }

  remove(id: number) {
    return this.roleRepo.delete(id);
  }
}
