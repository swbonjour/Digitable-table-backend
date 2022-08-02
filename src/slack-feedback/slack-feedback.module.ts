import { Module } from '@nestjs/common';
import { SlackFeedbackController } from './slack-feedback.controller';
import { SlackFeedbackService } from './slack-feedback.service';
import { SlackModule } from 'nestjs-slack';
import { SLACK_WEBHOOK } from 'src/tools/enviroment';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    SlackModule.forRoot({
      type: 'webhook',
      url: SLACK_WEBHOOK
    }),
  ],
  controllers: [SlackFeedbackController],
  providers: [SlackFeedbackService, PrismaService],
})
export class SlackFeedbackModule {}
