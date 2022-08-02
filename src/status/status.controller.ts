import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {
  constructor(private service: StatusService) {}

  @Get()
  getStatus() {
    return this.service.getStatus();
  }
}
