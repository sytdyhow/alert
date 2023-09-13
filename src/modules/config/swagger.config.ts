import { DocumentBuilder } from '@nestjs/swagger';

export class SwaggerConfig {
  static config() {
    return new DocumentBuilder()
      .setTitle('Prog')
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
