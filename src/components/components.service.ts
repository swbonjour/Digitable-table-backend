import { Injectable } from '@nestjs/common';
import { ConstructorItemEntity, ConstructorItemEnum } from 'src/entities/constructor_item.entity';
import { sendError } from 'src/helpers/statusCode.helper';

@Injectable()
export class ComponentsService {
  constructor() {}

  async getComponent(component: ConstructorItemEnum) {
    try {
      const data = await ConstructorItemEntity.find({
        where: {
          type: component
        }
      })
      return data
    } catch (error) {
      return sendError(error)
    }
  }
}
