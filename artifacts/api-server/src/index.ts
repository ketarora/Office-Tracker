import app from "./app";
import { logger } from "./lib/logger";
import { initializeDatabase } from "@workspace/db";

await initializeDatabase();

const rawPort = process.env["PORT"];
if (rawPort) {
  const port = Number(rawPort);
  if (!Number.isNaN(port) && port > 0) {
    app.listen(port, (err) => {
      if (err) {
        logger.error({ err }, "Error listening on port");
        process.exit(1);
      }
      logger.info({ port }, "Server listening");
    });
  }
}

export default app;
