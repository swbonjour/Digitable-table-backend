import { Controller } from '@nestjs/common';
import { SlackFeedbackService } from './slack-feedback.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from 'src/interfaces/kafka.interface';
import { OrderEntity } from 'src/entities/order.entitiy';

@Controller('slack')
export class SlackFeedbackController {
  constructor(private service: SlackFeedbackService) {}

  @MessagePattern('constructor.create')
  postMessageToSlackAndDb(@Payload() message: IKafkaMessage<OrderEntity>) {
    return this.service.postMessageToSlackAndDB(message.value);
  }
}
