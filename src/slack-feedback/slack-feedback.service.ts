import { Injectable } from '@nestjs/common';
import { SlackService } from 'nestjs-slack';
import {
  BlockCollection,
  SlackBlockDto,
  Blocks,
  Divider,
  Md,
} from 'slack-block-builder';
import { OrderEntity } from 'src/entities/order.entitiy';
import { sendError, sendSuccess } from 'src/helpers/statusCode.helper';
import { SlackFeedbackDto } from './dto/slack-feedback-dto';

@Injectable()
export class SlackFeedbackService {
  constructor(private service: SlackService) {}

  parseSlackPayload(dto: SlackFeedbackDto): Readonly<SlackBlockDto>[] {
    const slackData = BlockCollection(
      Blocks.Section({ text: `${Md.bold('Name:')} ${dto.payload.name}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Contact:')} ${dto.payload.contact}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Email:')} ${dto.payload.email}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Case:')} ${dto.payload.case}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('CPU:')} ${dto.payload.cpu}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('GPU:')} ${dto.payload.gpu}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('RAM:')} ${dto.payload.ram}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Power:')} ${dto.payload.power}` }),
    );
    return slackData;
  }

  async postMessageToSlackAndDB(dto: SlackFeedbackDto) {
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
      const feedback = await OrderEntity.save({
        name: dto.payload.name,
        contact: dto.payload.contact,
        email: dto.payload.email,
        case: dto.payload.case,
        cpu: dto.payload.cpu,
        gpu: dto.payload.gpu,
        ram: dto.payload.ram,
        power: dto.payload.power,
      });
      return feedback;
    } catch (error) {
      return sendError(error);
    }
  }
}
