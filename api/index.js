import app from "../artifacts/api-server/src/app.js";
import { initializeDatabase } from "../lib/db/src/index.js";

let dbInitialized = false;

export default async function handler(req, res) {
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
    } catch (err) {
      console.error("Failed to initialize database", err);
    }
  }
  
  return app(req, res);
}
