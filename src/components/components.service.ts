import { Injectable } from '@nestjs/common';
import { ComputerCaseEntity } from 'src/entities/computer_case.entity';
import { CPUEntity } from 'src/entities/cpu.entity';
import { GPUEntity } from 'src/entities/gpu.entity';
import { PowerEntity } from 'src/entities/power.entity';
import { RAMEntity } from 'src/entities/ram.entity';
import { sendError } from 'src/helpers/statusCode.helper';

@Injectable()
export class ComponentsService {
  constructor() {}

  async getCases() {
    try {
      const caseData = await ComputerCaseEntity.find();
      return caseData;
    } catch (error) {
      return sendError();
    }
  }

  async getCPUs() {
    try {
      const cpuData = await CPUEntity.find();
      return cpuData;
    } catch (error) {
      return sendError();
    }
  }

  async getGPUs() {
    try {
      const gpuData = await GPUEntity.find();
      return gpuData;
    } catch (error) {
      return sendError();
    }
  }

  async getRAMs() {
    try {
      const ramData = await RAMEntity.find();
      return ramData;
    } catch (error) {
      return sendError();
    }
  }

  async getPowers() {
    try {
      const powerData = await PowerEntity.find();
      return powerData;
    } catch (error) {
      return sendError();
    }
  }
}
