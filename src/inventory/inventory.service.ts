import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entites/items.entity';
import { Repository } from 'typeorm';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bull';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    @InjectQueue('notify') private notifyQueue: Queue,
  ) {}

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findById(id: number): Promise<Item> {
    return this.itemRepository.findOneBy({ id });
  }

  async findByName(name: string): Promise<Item> {
    return this.itemRepository.findOneBy({ name });
  }

  async addItem(item): Promise<number> {
    const { name } = item;
    const result = await this.itemRepository.findBy({ name });
    if (result.length) {
      throw new ConflictException('Item exists alreay!');
    }
    const items = await this.itemRepository.save(item);
    return items.id;
  }

  async updateQuantity(id: number, quantity: number): Promise<Item> {
    const item = await this.itemRepository.findOneBy({ id });
    if (quantity <= item.notifyNo) {
      console.log('Warning!');
      await this.notifyQueue.add('inventory', item);
    }
    return this.itemRepository.save({ ...item, quantity });
  }
}
