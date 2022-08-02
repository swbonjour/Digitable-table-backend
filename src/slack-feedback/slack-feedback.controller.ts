import { Body, Controller, Post } from '@nestjs/common';
import { SlackFeedbackDto } from './dto/slack-feedback-dto';
import { SlackFeedbackService } from './slack-feedback.service';

@Controller('slack')
export class SlackFeedbackController {
    constructor(private service: SlackFeedbackService) {};

    @Post('feedback')
    postMessageToSlackAndDb(@Body() dto: SlackFeedbackDto) {
        return this.service.postMessageToSlackAndDB(dto);
    }
}
