import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';

@Module({
  controllers: [ComponentsController],
  providers: [ComponentsService, PrismaService]
})
export class ComponentsModule {}
