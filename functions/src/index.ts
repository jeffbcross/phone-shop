import * as functions from 'firebase-functions';
import * as express from 'express';
import { Express } from 'express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../apps/phone-service/src/app/app.module';

console.log('hello');

const server: Express = express();
console.log('AppModule', AppModule);
const startNestApplication = async (expressInstance: Express) => {
  const app = await NestFactory.create(AppModule, expressInstance);
  app.init();
};

startNestApplication(server).catch(() => {
  console.error('could not start');
});
exports.api = functions.https.onRequest(server);
