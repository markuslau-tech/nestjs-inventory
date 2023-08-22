import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../entites/items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
