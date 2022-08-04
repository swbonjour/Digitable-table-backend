import { Injectable } from '@nestjs/common';
import { sendSuccess } from 'src/helpers/statusCode.helper';

@Injectable()
export class StatusService {
  constructor() {}

  getStatus() {
    return sendSuccess();
  }
}
