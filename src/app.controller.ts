import { Controller,Get } from '@nestjs/common';

@Controller('a')
export class AppController {
  constructor() {}

  @Get('b')
  getHello(): string {
    return 'Hello World!';
  }
}
