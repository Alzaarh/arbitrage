import { Centrifuge } from 'centrifuge';

import redis from '../config/redis.js';
import logger from '../utils/logger.js';

const client = new Centrifuge('wss://wss.nobitex.ir/connection/websocket', {});

client.on('connected', () => {
  logger.info('connected to nobitex');
});

client.on('error', (ctx) => logger.error(ctx.error.message));

client.connect();

const sub = client.newSubscription('public:orderbook-BTCUSDT', { delta: 'fossil' });

sub.on('publication', (ctx) =>
  redis.zAdd('nobitex', { value: ctx.data.data, score: ctx.data.data.lastUpdate }, {})
);

sub.subscribe();
