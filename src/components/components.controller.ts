import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { ConstructorItemEnum } from 'src/entities/constructor_item.entity';
import { IKafkaMessage } from 'src/interfaces/kafka.interface';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
    constructor(private service: ComponentsService) {}

    @MessagePattern('constructor.component')
    getComponent(@Payload() message: IKafkaMessage<ConstructorItemEnum>) {
        return this.service.getComponent(message.value)
    }
}
