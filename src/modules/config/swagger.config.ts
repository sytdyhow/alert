import { DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfig {
  static config() {
    return new DocumentBuilder()
      .setTitle('Pro1')
      .setDescription('')
      .setVersion('1.0')
      .addTag('Mb')
      .addBearerAuth({
        type: 'http',
        bearerFormat: 'bearer',
      })
      .build();
  }
}
