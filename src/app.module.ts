import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { ComponentsModule } from './components/components.module';
import { SlackFeedbackModule } from './slack-feedback/slack-feedback.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_TYPE,
  DB_USERNAME,
} from './tools/enviroment';
import { ComputerCaseEntity } from './entities/computer_case.entity';
import { OrderEntity } from './entities/order.entitiy';
import { ConstructorItemEntity } from './entities/constructor_item.entity';

@Module({
  imports: [
    StatusModule,
    ComponentsModule,
    SlackFeedbackModule,
    TypeOrmModule.forRoot({
      type: DB_TYPE as any,
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [ComputerCaseEntity, OrderEntity, ConstructorItemEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
