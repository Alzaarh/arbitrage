import redis from "redis";

export default await redis
  .createClient({ url: process.env.REDIS_URI })
  .on("error", (err) => console.error(err))
  .connect();
