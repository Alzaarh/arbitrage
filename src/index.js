import "dotenv/config";

import app from "./app.js";
import "./jobs/coinex.js";
import "./jobs/nobitex.js";

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));
