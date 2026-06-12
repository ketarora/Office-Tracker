// @ts-nocheck
import app from "../artifacts/api-server/src/app";
import { initializeDatabase } from "../lib/db/src/index";

let dbInitialized = false;

export default async function handler(req: any, res: any) {
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
