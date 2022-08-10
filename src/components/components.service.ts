import { Injectable } from '@nestjs/common';
import { ConstructorItemEntity } from 'src/entities/constructor_item.entity';
import { sendError } from 'src/helpers/statusCode.helper';
import { ComponentDTO } from './dto';

@Injectable()
export class ComponentsService {
  constructor() {}

  async getComponent(dto: ComponentDTO) {
    try {
      const data = await ConstructorItemEntity.find({
        where: {
          type: dto.payload.component
        }
      })
      return data
    } catch (error) {
      return sendError(error)
    }
  }
}
