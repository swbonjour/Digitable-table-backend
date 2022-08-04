import { Module } from '@nestjs/common';
import { SlackFeedbackController } from './slack-feedback.controller';
import { SlackFeedbackService } from './slack-feedback.service';
import { SlackModule } from 'nestjs-slack';
import { SLACK_WEBHOOK } from 'src/tools/enviroment';

@Module({
  imports: [
    SlackModule.forRoot({
      type: 'webhook',
      url: SLACK_WEBHOOK
    }),
  ],
  controllers: [SlackFeedbackController],
  providers: [SlackFeedbackService],
})
export class SlackFeedbackModule {}
