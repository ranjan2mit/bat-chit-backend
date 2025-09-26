import { createClient } from 'redis';
import { config } from '../config';

const redisClient = createClient({
  url: config.redisUrl,
});

redisClient.on('error', (err) => {
  console.error('[Redis Error]', err);
});

(async () => {
  await redisClient.connect();
  console.log('[Redis] Connected');
})();

export default redisClient;
