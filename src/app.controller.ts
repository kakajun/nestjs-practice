import { Controller, Get, Req, Query, Param, Post, Body } from '@nestjs/common';

@Controller('a')
export class AppController {
  constructor() {}
  @Get(':id')
  findAll(@Param() query: any): string {
    console.log(query, '444');

    return 'This action returns all cats';
  }

  @Post('create')
  createCat(@Body() body: any): string {
    console.log(body, '555');
    return `Created cat with data: ${JSON.stringify(body)}`;
  }

  // findAll(@Query() request: Request): string {
  //   console.log(request, '444');

  //   return 'This action returns all cats';
  // }

  @Get('b')
  getHello(): string {
    return 'Hello World!';
  }
}
