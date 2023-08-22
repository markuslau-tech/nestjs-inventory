import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { QueueModule } from './config/queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    QueueModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
