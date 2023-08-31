import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/modules/users/entities/user.entity";
import { Repository } from "typeorm";
import { Strategy,ExtractJwt} from "passport-jwt"
import { JwtPayloadInterface } from "../interfaces/jwt-payload..interface";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(private configService:ConfigService,
        @InjectRepository(UserEntity) private  userRepo:Repository<UserEntity>, ){
            super({
                jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration:false,
                secretOrKey:configService.get<string>('JWT_SECRET'),
            });
        }

        async validate(payload:JwtPayloadInterface){
            const {id} =payload;
            const user =await this.userRepo
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.roles','roles')
            .leftJoinAndSelect('roles.permissions','permissions')
            .where('user.id=:id',{id})
            .getOne()
            return user;
        }

}