import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { getKafkaClientOptions } from './helpers/kafka.helper';
import { KafkaConsumerEnum } from './enums/kafka.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: getKafkaClientOptions(KafkaConsumerEnum.constructor)
  });

  await app.listen();
}
bootstrap();
