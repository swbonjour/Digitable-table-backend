import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { IKafkaMessage } from 'src/interfaces/kafka.interface';
import { ComponentsService } from './components.service';
import { ComponentDTO } from './dto';

@Controller('components')
export class ComponentsController {
    constructor(private service: ComponentsService) {}

    @MessagePattern('constructor.component')
    getComponent(@Payload() message: IKafkaMessage<ComponentDTO>) {
        return this.service.getComponent(message.value)
    }
}
