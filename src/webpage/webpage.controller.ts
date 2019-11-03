import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class WebpageController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!',
             scriptjs: 'localhost:3000/static/server.js' };
  }
}