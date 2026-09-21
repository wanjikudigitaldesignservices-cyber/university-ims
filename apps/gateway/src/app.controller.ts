import { Controller, Get, Post, Body, Inject, Request, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('IDENTITY_SERVICE') private identityClient: ClientProxy,
  ) {}

  @Get('health')
  getHealth() {
    return { status: 'ok', service: 'gateway' };
  }

  // Example route proxying to identity service
  @Post('auth/login')
  async login(@Body() body: any) {
    // We send a message pattern to NATS
    const result = await firstValueFrom(this.identityClient.send({ cmd: 'auth.login' }, body));
    return result;
  }
}
