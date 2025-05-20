import zlib from "node:zlib";

import WebSocket from "ws";

import redis from "../config/redis.js";

const ws = new WebSocket("wss://socket.coinex.com/v2/futures");

ws.on("error", (err) => console.error(err));

ws.on("open", () => {
  console.log("connected to coinex");
  ws.send(
    JSON.stringify({
      method: "depth.subscribe",
      params: {
        market_list: [["BTCUSDT", 10, "0", true]],
      },
      id: 1,
    })
  );
});

ws.on("message", (data) => {
  zlib.unzip(data, (_err, data) => {
    redis.set("coinex", data.toString());
  });
});
