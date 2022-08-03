import { Injectable } from '@nestjs/common';
import { SlackService } from 'nestjs-slack';
import {
  BlockCollection,
  SlackBlockDto,
  Blocks,
  Divider,
  Md,
} from 'slack-block-builder';
import { sendError, sendSuccess } from 'src/helpers/statusCode.helper';
import { ProducerService } from 'src/kafka/producer.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SlackFeedbackDto } from './dto/slack-feedback-dto';

@Injectable()
export class SlackFeedbackService {
  constructor(
    private service: SlackService,
    private prisma: PrismaService,
    private readonly producer: ProducerService,
  ) {}

  parseSlackPayload(dto: SlackFeedbackDto): Readonly<SlackBlockDto>[] {
    const slackData = BlockCollection(
      Blocks.Section({ text: `${Md.bold('Name:')} ${dto.name}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Contact:')} ${dto.contact}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Email:')} ${dto.email}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Case:')} ${dto.case}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('CPU:')} ${dto.cpu}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('GPU:')} ${dto.gpu}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('RAM:')} ${dto.ram}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Power:')} ${dto.power}` }),
    );
    return slackData;
  }

  async postMessageToSlackAndDB(dto: SlackFeedbackDto) {
    await this.producer.produce({
      topic: 'postMessage',
      messages: [
        {
          value: 'message posted to slack and database',
        },
      ],
    });
    try {
      this.saveMessageToDB(dto);
      this.postMessageToSlack(dto);
      return sendSuccess();
    } catch (error) {
      return sendError(error);
    }
  }

  async postMessageToSlack(dto: SlackFeedbackDto) {
    try {
      const slackData = this.parseSlackPayload(dto);
      await this.service.sendBlocks(slackData);
      return sendSuccess();
    } catch (error) {
      return sendError(error);
    }
  }

  async saveMessageToDB(dto: SlackFeedbackDto) {
    try {
      const feedback = await this.prisma.order.create({
        data: {
          name: dto.name,
          contact: dto.contact,
          email: dto.email,
          case: dto.case,
          cpu: dto.cpu,
          gpu: dto.gpu,
          ram: dto.ram,
          power: dto.power,
        },
      });
      return feedback;
    } catch (error) {
      return sendError(error);
    }
  }
}
