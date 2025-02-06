"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discord_file_api_1 = require("discord-file-api");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Add static file serving
app.use(express_1.default.static("public"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Initialize Discord bot
            yield (0, discord_file_api_1.initializeDiscordBot)({
                botToken: config_1.config.DISCORD_BOT_TOKEN,
                channelId: config_1.config.DISCORD_CHANNEL_ID,
            });
            // Mount the Discord File API routes
            app.use("/api", (0, discord_file_api_1.createDiscordUploadAPI)());
            // Error handling middleware
            app.use((err, req, res, next) => {
                console.error("Error:", err);
                res.status(500).json({ error: "Internal server error" });
            });
            app.listen(config_1.config.PORT, () => {
                console.log(`🚀 Server running on port ${config_1.config.PORT}`);
            });
        }
        catch (error) {
            console.error("❌ Failed to start server:", error);
            process.exit(1);
        }
    });
}
startServer();
