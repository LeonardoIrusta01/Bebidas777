import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinkModule } from './drink/drink.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DrinkModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
