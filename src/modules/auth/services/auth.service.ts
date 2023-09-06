import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private jwtService:JwtService,
    private configService:ConfigService,             
    @InjectRepository(UserEntity) private userRepo:Repository<UserEntity>
    ){}
    async login(username:string,password:string){
 
      const user =await this.userRepo.findOneBy({
        username,
      });
      if(!user){
        return {
                access: false,
              }
      }

      const checkPassword =await bcrypt.compare(password,user.password);
      if(!checkPassword){
        return {
          access: false,
        }
      }
      const accessToken =await this.jwtService.signAsync(
    {
        id:user.id
    },
    {
      secret:this.configService.get('JWT_SECRET'),
      expiresIn:'1h'
    }
      );

    const systems = await this.findOne(user.id);


      return{
        access:true,
        accessToken,
        systems





        
      }

    }

    findOne(id:number){
      return this.userRepo
      .createQueryBuilder('users_systems')
      .leftJoinAndSelect('users_systems.systems','systems')
      .where('users_systems.id =:id',{id})
      .getOne();
    }

  
}
