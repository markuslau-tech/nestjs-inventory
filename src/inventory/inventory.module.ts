import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../entites/items.entity';
import { QueueModule } from '../config/queue.module';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), QueueModule],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
