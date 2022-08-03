import { Injectable } from '@nestjs/common';
import { sendSuccess } from 'src/helpers/statusCode.helper';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class StatusService {
  constructor(private readonly producer: ProducerService) {}

  async getStatus() {
    await this.producer.produce({
      topic: 'status',
      messages: [
        {
          value: `${JSON.stringify(sendSuccess())}`,
        },
      ],
    })
    return sendSuccess();
  }
}
