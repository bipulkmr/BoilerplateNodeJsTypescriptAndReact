import { Injectable } from '@nestjs/common';
import { createProxyServer, ServerOptions } from 'http-proxy';
import { Request, Response } from 'express';
import { IncomingMessage, ServerResponse } from 'http';

@Injectable()
export class ProxyService {
    private proxy = createProxyServer({});
  public proxyRequest(
    req: Request,
    res: Response,
    options: ServerOptions,
  ) {
    this.restreamBody(req, res);
    this.proxy.web(req, res, options, (
      err: Error
    ) => console.log(err));
  }

  public getTargetUrl = (
    originalUrl: string,
    proxyBaseUrl: string,
    replaceWith: string = '',
  ) => `${originalUrl.replace(proxyBaseUrl, replaceWith)}`;

  private restreamBody(req: Request, res: Response) {
    // Body parser has already listened to all the body streaming events.
    // So removing all the body streaming events.
    req.removeAllListeners('data');
    req.removeAllListeners('end');
    // Setting the content-length to correct size
    if (req.headers['content-length'] !== undefined) {
      req.headers['content-length'] =
        Buffer.byteLength(JSON.stringify(req.body), 'utf8') + '';
    }
    // In the next tick emit the body again so that http-proxy and listen to this.
    process.nextTick(() => {
      if (req.body) {
        req.emit('data', JSON.stringify(req.body));
      }
      req.emit('end');
    });
  }
}
