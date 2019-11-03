import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';


declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
//   console.log(app.useLogger);
app.setBaseViewsDir(join(__dirname, 'views'));
app.setViewEngine('pug');
  await app.listen(3000);
}
bootstrap();