import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { auth } from './auth';

@Controller('api/auth')
export class AuthController {
  @All('*')
  async handleAuth(@Req() req: Request, @Res() res: Response) {
    // Mount Better Auth to handle all /api/auth/* requests
    const authReq = new Request(req.url, {
      method: req.method,
      headers: req.headers as any,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined
    } as any);

    const response = await auth.handler(authReq);

    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const text = await response.text();
    res.send(text);
  }
}
