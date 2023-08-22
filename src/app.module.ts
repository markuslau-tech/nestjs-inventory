import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
