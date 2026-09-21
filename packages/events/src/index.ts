import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { BaseEvent } from '@university/contracts';
import { Client as QStashClient } from '@upstash/qstash';

@Injectable()
export class EventPublisher {
  private natsClient: ClientProxy;
  private qstashClient: QStashClient;

  constructor() {
    this.natsClient = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: { servers: [process.env.NATS_URL || 'nats://localhost:4222'] },
    });
    
    // QStash client initialization
    // If running locally, we mostly use NATS, but the interface allows QStash for prod
    if (process.env.QSTASH_TOKEN) {
      this.qstashClient = new QStashClient({ token: process.env.QSTASH_TOKEN });
    }
  }

  async publish(topic: string, event: BaseEvent) {
    if (process.env.NODE_ENV === 'production' && this.qstashClient) {
      // Publish to QStash
      await this.qstashClient.publishJSON({
        url: `${process.env.GATEWAY_URL}/api/events/${topic}`,
        body: event,
        // we can set topic mapping in qstash or directly publish to the consumer endpoints
      });
    } else {
      // Publish to NATS locally
      this.natsClient.emit(topic, event);
    }
  }
}
