import { Module } from '@nestjs/common';
import { SystemsService } from './services/systems.service';
import { SystemsController } from './controllers/systems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemEntity } from './entities/system.entity';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SystemEntity])],
  controllers: [SystemsController],
  providers: [SystemsService,JwtService],
})
export class SystemsModule {}
