import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ManagerModule } from './manager/manager.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ManagerModule,
    {
      transport: Transport.TCP,
    },
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
