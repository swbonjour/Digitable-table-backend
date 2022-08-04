import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private service: StatusService) {}

  @MessagePattern('constructor.status.service')
  getStatus() {
    return this.service.getStatus();
  }
}
