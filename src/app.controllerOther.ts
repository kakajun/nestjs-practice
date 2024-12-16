import {
  Controller,
  Get,
  Req,
  Query,
  Param,
  Post,
  Body,
  Header,
  Bind,
  Redirect,
  HttpCode,
} from '@nestjs/common';

@Controller()
export class AnotherController {
  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }

  @Post('b')
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }

  @Post('c')
  @Header('Cache-Control', 'none')
  createb() {
    return 'This action adds a new cat';
  }

  @Get('d')
  @Redirect('https://nest.nodejs.cn', 301)
  getHello(): string {
    return 'Hello World!';
  }

  @Get('docs')
  @Redirect('https://nest.nodejs.cn', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://nest.nodejs.cn/v5/' };
    }
  }

  @Get(':id')
  @Bind(Param())
  findOne(params) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  //   @Controller({ host: 'admin.example.com' })
  // export class AdminController {
  //   @Get()
  //   index(): string {
  //     return 'Admin page';
  //   }
  // }
}
