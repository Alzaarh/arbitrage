import { createClient } from 'redis';

import logger from '../utils/logger.js';

export default await createClient()
  .on('error', (err) => logger.error('redis error' + err.message))
  .connect();
