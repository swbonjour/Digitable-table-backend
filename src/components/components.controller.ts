import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
    constructor(private service: ComponentsService) {}

    @MessagePattern('constructor.cases')
    getComputerCases() {
        return this.service.getCases();
    }

    @MessagePattern('constructor.cpus')
    getCPUs() {
        return this.service.getCPUs();
    }

    @MessagePattern('constructor.gpus')
    getGPUs() {
        return this.service.getGPUs();
    }

    @MessagePattern('constructor.rams')
    getRAMs() {
        return this.service.getRAMs();
    }

    @MessagePattern('constructor.powers')
    getPowers() {
        return this.service.getPowers();
    }
}
