import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './modules/config/swagger.config';
import {  ValidationPipe } from '@nestjs/common';
import * as fs from "fs"

// const httpsOptions = {
//   key: fs.readFileSync('./secrets/cert.key'),
//   cert: fs.readFileSync('./secrets/cert.crt'),
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{});
  const document = SwaggerModule.createDocument(app, SwaggerConfig.config());
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());


  app.enableCors();
  await app.listen(3000,"192.168.9.30");
}
bootstrap();