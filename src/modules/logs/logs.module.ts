import { Module } from '@nestjs/common';
import { LogsService } from './services/logs.service';
import { LogsController } from './controllers/logs.controller';

@Module({
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}

