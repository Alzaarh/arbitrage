import { Centrifuge } from "centrifuge";

import redis from "../config/redis.js";

const client = new Centrifuge("wss://wss.nobitex.ir/connection/websocket", {});

client.on("connected", () => {
  console.log("connected to nobitex");
});

client.on("error", (err) => {
  console.error(err);
});

const sub = client.newSubscription("public:orderbook-BTCUSDT");

sub.on("publication", async (ctx) => {
  await redis.set("nobitex", JSON.stringify(ctx.data));
});

client.connect();

sub.subscribe();
