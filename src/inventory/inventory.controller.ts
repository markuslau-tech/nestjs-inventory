import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Item } from '../entites/items.entity';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  getItem(@Param('id') id: number): Promise<Item> {
    return this.inventoryService.findById(id);
  }

  @Post()
  insertItem(@Body() item: Item): Promise<number> {
    return this.inventoryService.addItem(item);
  }

  @Put()
  updateQuantity(@Query('id') id: number, @Query('quantity') quantity: number) {
    return this.inventoryService.updateQuantity(id, quantity);
  }
}
