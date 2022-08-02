import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { PrismaModule } from './prisma/prisma.module';
import { ComponentsModule } from './components/components.module';
import { SlackFeedbackModule } from './slack-feedback/slack-feedback.module';

@Module({
  imports: [StatusModule, PrismaModule, ComponentsModule, SlackFeedbackModule],
})
export class AppModule {}
