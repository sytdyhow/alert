import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { RoleEntity } from '../roles/entities/role.entity';
import { SystemEntity } from 'src/modules/systems/entities/system.entity';

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(UserEntity) private userRepo:Repository<UserEntity>){}
  async create(createUserDto: CreateUserDto) {
   const salt =await bcrypt.genSalt(12); 
   const password =await bcrypt.hash(createUserDto.password,salt);
   const {active} =createUserDto;
    return this.userRepo.save({
      username:createUserDto.username,
       password:password,
       active:createUserDto.active,
      roles:createUserDto.roleIds.map(
        (roleId)=>new RoleEntity({id:roleId})
      ),
      systems:createUserDto.systemIds.map(
        (systemId)=>new SystemEntity({id:systemId})
      ),
   
    } )
   
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) { 
    return this.userRepo.findOneBy({
      id,
    });
  }

async  update(id: number, updateUserDto: UpdateUserDto) {
  const {active}=updateUserDto;
  const us =new UserEntity({id});
if(updateUserDto.password){
  const user=await this.userRepo.findOneBy({
    id,
  });
  if(!user){
    return 'User not found';
  }else{
    const checkPassword:boolean=await bcrypt.compare(updateUserDto.password,user.password)
    if(!checkPassword){
      return 'User password is incorrect';
    }
    const salt =await bcrypt.genSalt(12)
    updateUserDto.newPassword=await bcrypt.hash(updateUserDto.newPassword,salt);
  }

}
if(active!==null){
  us.active=active
}
return this.userRepo.save({
  id,
  password:updateUserDto.newPassword,
  us,
})

   
  }

  remove(id: number) {
    return this.userRepo.delete(id)
  }
}
