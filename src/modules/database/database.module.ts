import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoleEntity } from '../users/roles/entities/role.entity';
import { PermissionEntity } from '../users/permissions/entities/permission.entity';
import { ImageEntity } from '../images/entities/image.entity';
import { SystemEntity } from '../systems/entities/system.entity';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:async(configService:ConfigService)=>{
                return{
                type:'mysql',
                host:configService.get('POSTGRES_DATABASE_HOST'),
                port:configService.get<number>('POSTGRES_DATABASE_PORT'),
                username:configService.get('POSTGRES_DATABASE_USERNAME'),
                password:configService.get('POSTGRES_DATABASE_PASSWORD'),
                database:configService.get('POSTGRES_DATABASE_NAME'),
                entities:[UserEntity,RoleEntity,PermissionEntity,ImageEntity,SystemEntity],
                // logging: true,
                // logger: 'simple-console',
                synchronize: false,
                };
            },
            inject:[ConfigService],
        })
    ]
    // imports:[
    //     TypeOrmModule.forRoot({
    //         type:"postgres",
    //         host:"localhost",
    //         port:5432,
    //         username:"postgres",
    //         password:'8523',
    //         database:'new',
    //         entities:[UserEntity],
    //         synchronize:true
    //     })
    // ]
})
export class DatabaseModule {}
