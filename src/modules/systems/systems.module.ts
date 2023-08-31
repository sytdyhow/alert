import { Module } from '@nestjs/common';
import { SystemsService } from './services/systems.service';
import { SystemsController } from './controllers/systems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemEntity } from './entities/system.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SystemEntity])],
  controllers: [SystemsController],
  providers: [SystemsService],
})
export class SystemsModule {}
