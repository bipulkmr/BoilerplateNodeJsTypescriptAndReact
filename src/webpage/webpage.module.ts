import { Module } from '@nestjs/common';
import { WebpageController } from './webpage.controller';
import { WebpageService } from './webpage.service';

@Module({
  imports: [WebpageModule],
  controllers: [WebpageController],
  providers: [WebpageService],
})
export class WebpageModule {}