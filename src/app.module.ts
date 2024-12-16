import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnotherController } from './app.controllerOther';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AnotherController],
  // providers: [AppService],
})
export class AppModule {}
