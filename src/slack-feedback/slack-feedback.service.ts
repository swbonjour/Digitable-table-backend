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
      Blocks.Section({ text: `${Md.bold('Name:')} ${dto.payload.userPayload.name}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Contact:')} ${dto.payload.userPayload.contact}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Email:')} ${dto.payload.userPayload.email}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Case:')} ${dto.payload.componentsPayload.componentCase}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('CPU:')} ${dto.payload.componentsPayload.componentCPU}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('GPU:')} ${dto.payload.componentsPayload.componentGPU}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('RAM:')} ${dto.payload.componentsPayload.componentRAM}` }),
      Divider(),
      Blocks.Section({ text: `${Md.bold('Power:')} ${dto.payload.componentsPayload.componentPower}` }),
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
        name: dto.payload.userPayload.name,
        contact: dto.payload.userPayload.contact,
        email: dto.payload.userPayload.email,
        case: dto.payload.componentsPayload.componentCase,
        cpu: dto.payload.componentsPayload.componentCPU,
        gpu: dto.payload.componentsPayload.componentGPU,
        ram: dto.payload.componentsPayload.componentRAM,
        power: dto.payload.componentsPayload.componentPower,
      });
      return feedback;
    } catch (error) {
      return sendError(error);
    }
  }
}
