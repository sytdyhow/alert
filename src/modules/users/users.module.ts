import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    PermissionsModule,
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
