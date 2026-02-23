import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-43920120/health", (c) => {
  return c.json({ status: "ok" });
});

// Get workflows
app.get("/make-server-43920120/workflows", async (c) => {
  try {
    const data = await kv.get("project_data");
    // Handle legacy data or empty data
    if (!data) {
       return c.json({ workflows: [], activeWorkflowId: 'default' });
    }
    return c.json(data);
  } catch (error) {
    console.error("Error fetching workflows:", error);
    return c.json({ error: "Failed to fetch workflows" }, 500);
  }
});

// Save workflows
app.post("/make-server-43920120/workflows", async (c) => {
  try {
    const body = await c.req.json();
    const { workflows, activeWorkflowId } = body;
    
    if (!workflows) {
      return c.json({ error: "No workflows data provided" }, 400);
    }

    await kv.set("project_data", { workflows, activeWorkflowId });
    return c.json({ success: true });
  } catch (error) {
    console.error("Error saving workflows:", error);
    return c.json({ error: "Failed to save workflows" }, 500);
  }
});

Deno.serve(app.fetch);