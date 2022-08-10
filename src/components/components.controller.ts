import { Controller, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices'
import { ConstructorItemEnum } from 'src/entities/constructor_item.entity';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
    constructor(private service: ComponentsService) {}

    @MessagePattern('constructor.component')
    getComponent(@Param('component') component: ConstructorItemEnum) {
        return this.service.getComponent(component)
    }
}
