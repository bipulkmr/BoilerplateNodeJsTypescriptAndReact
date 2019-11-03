import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Module({
  exports: [ProxyService],
  providers: [ProxyService],
})
export class ProxyModule {}