import { Controller, Get } from '@nestjs/common';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
    constructor(private service: ComponentsService) {}

    @Get('cases')
    getComputerCases() {
        return this.service.getCases();
    }

    @Get('cpus')
    getCPUs() {
        return this.service.getCPUs();
    }

    @Get('gpus')
    getGPUs() {
        return this.service.getGPUs();
    }

    @Get('rams')
    getRAMs() {
        return this.service.getRAMs();
    }

    @Get('powers')
    getPowers() {
        return this.service.getPowers();
    }
}
