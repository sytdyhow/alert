import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationModule } from './config/config.module';
import { RolesModule } from './users/roles/roles.module';
import { PermissionsModule } from './users/permissions/permissions.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImagesModule } from './images/images.module';
import { SystemsModule } from './systems/systems.module';
import { LogsModule } from './logs/logs.module';

@Module({
    imports:[
        DatabaseModule,
        UsersModule,
        AuthModule,
        ConfigModule,
        ConfigurationModule,
        RolesModule,
        PermissionsModule,
        MulterModule.registerAsync({
            useFactory:async ()=>({
                dest:'./uploads',
            }),
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '../uploads'),
            serveRoot: '/uploads',
          }),
        
        ImagesModule,
        SystemsModule,
        LogsModule

    ]
})
export class AppModule {}
