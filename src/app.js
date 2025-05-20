import express from 'express';

import response from './utils/response.js';

const app = express();

app.get('/health-check', (_req, res) => response.success(res, 'OK'));

export default app;
