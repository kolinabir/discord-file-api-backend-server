import express from "express";
import { createDiscordUploadAPI, initializeDiscordBot } from "discord-file-api";
import { config } from "./config";

const app = express();
app.use(express.json());

// Add static file serving
app.use(express.static("public"));

async function startServer() {
  try {
    // Initialize Discord bot
    await initializeDiscordBot({
      botToken: config.DISCORD_BOT_TOKEN!,
      channelId: config.DISCORD_CHANNEL_ID!,
    });

    // Mount the Discord File API routes
    app.use("/api", createDiscordUploadAPI());

    // Error handling middleware
    app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    );

    app.listen(config.PORT, () => {
      console.log(`🚀 Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
