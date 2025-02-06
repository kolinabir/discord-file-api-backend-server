import dotenv from "dotenv";
import { tmpdir } from "os";
import { join } from "path";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  DISCORD_CHANNEL_ID: process.env.DISCORD_CHANNEL_ID,
  UPLOAD_DIR: process.env.UPLOAD_DIR || join(tmpdir(), "discord-file-uploads"),
};
