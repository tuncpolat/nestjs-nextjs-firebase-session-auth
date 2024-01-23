import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { config } from './config/configuration';
import cookieParser from 'cookie-parser';

const logger = new Logger('Main');

async function bootstrap() {
  console.log(config);

  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: [`${config.host}:${config.port}`, ...config.clientUrls],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.listen(config.port, () => {
    logger.log(
      `Sportwagen Mietvergleich Server is listening on ${config.port}`,
    );
  });
}
bootstrap();
