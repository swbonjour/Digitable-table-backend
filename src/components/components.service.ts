import { Injectable } from '@nestjs/common';
import { sendError } from 'src/helpers/statusCode.helper';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComponentsService {
  constructor(private prisma: PrismaService) {}

  async getCases() {
    try {
      const caseData = await this.prisma.computer_case.findMany();
      return caseData;
    } catch (error) {
      return sendError();
    }
  }

  async getCPUs() {
    try {
      const cpuData = await this.prisma.cpu.findMany();
      return cpuData;
    } catch (error) {
      return sendError();
    }
  }

  async getGPUs() {
    try {
      const gpuData = await this.prisma.gpu.findMany();
      return gpuData;
    } catch (error) {
      return sendError();
    }
  }

  async getRAMs() {
    try {
      const ramData = await this.prisma.ram.findMany();
      return ramData;
    } catch (error) {
      return sendError();
    }
  }

  async getPowers() {
    try {
      const powerData = await this.prisma.power.findMany();
      return powerData;
    } catch (error) {
      return sendError();
    }
  }
}
