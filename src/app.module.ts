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
import { CPUEntity } from './entities/cpu.entity';
import { GPUEntity } from './entities/gpu.entity';
import { RAMEntity } from './entities/ram.entity';
import { PowerEntity } from './entities/power.entity';

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
      entities: [ComputerCaseEntity, CPUEntity, GPUEntity, RAMEntity, PowerEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
