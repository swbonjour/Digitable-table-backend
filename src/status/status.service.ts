import { Injectable } from '@nestjs/common';
import { sendSuccess } from 'src/helpers/statusCode.helper';

@Injectable()
export class StatusService {
  async getStatus() {
    await sendSuccess();
  }
}
