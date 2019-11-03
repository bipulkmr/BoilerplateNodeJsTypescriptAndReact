import { CatsModule } from './controllers/cats.module'
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { WebpageModule } from './webpage/webpage.module';


@Module
({
    imports: [CatsModule,
        WebpageModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'staticfile'),
            renderPath: '/static'
          }),],
})
export class AppModule {};