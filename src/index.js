import app from './app.js';
import './jobs/nobitex.js';
import logger from './utils/logger.js';

app.listen(3000, () => logger.info('server is running on port 3000'));
