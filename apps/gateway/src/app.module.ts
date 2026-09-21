import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerModule } from '@university/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './auth.middleware';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Module({
  imports: [
    LoggerModule,
    ClientsModule.register([
      {
        name: 'IDENTITY_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_URL || 'nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Proxy /api/auth to the identity-svc which runs on port 3001
    consumer
      .apply(
        createProxyMiddleware({
          target: process.env.IDENTITY_SVC_URL || 'http://localhost:3001',
          changeOrigin: true,
        }),
      )
      .forRoutes({ path: 'api/auth/*', method: RequestMethod.ALL });

    // Apply Auth middleware to all other routes
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'api/auth/(.*)', method: RequestMethod.ALL })
      .forRoutes('*');
  }
}

