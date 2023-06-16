import * as process from 'process';
import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const start = async (): Promise<void> => {
  const PORT: string | 5000 = process.env.PORT || 5000;
  const app: INestApplication = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(PORT, (): void =>
    Logger.log(`Local server [${PORT}] started...`, Logger.getTimestamp()),
  );
};

start().catch((e) => console.log(e));
