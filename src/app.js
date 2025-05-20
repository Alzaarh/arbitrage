import express from "express";

import redis from "./config/redis.js";

const app = express();

app.get("/health-check", (_req, res) => res.json({ data: "OK" }));

app.get("/api/orderbooks", async (req, res) => {
  const result = await redis.get(req.query.exchange);
  res.json({ data: JSON.parse(result ?? "") });
});

app.use((_req, res) => res.status(404).json({ error: "not found" }));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

export default app;
