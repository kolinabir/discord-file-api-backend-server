# discord-file-api

## Overview
This project is a Node.js application that provides an Express API for uploading and downloading files using Discord as storage. It leverages Discord's infrastructure to securely store files.

## Features
- Easy integration with Express.js
- File upload and download functionality
- Secure storage using Discord's infrastructure
- TypeScript support
- Async/await API

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/discord-file-api.git
   ```
2. Navigate to the project directory:
   ```
   cd discord-file-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Setup
1. Create a Discord bot at the [Discord Developer Portal](https://discord.com/developers/applications).
2. Add the bot to your server with file permissions.
3. Create a channel for file storage.
4. Get your bot token and channel ID.
5. Create a `.env` file in the root directory and add the following environment variables:
   ```
   DISCORD_BOT_TOKEN=your_bot_token
   DISCORD_CHANNEL_ID=your_channel_id
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The server will run on `http://localhost:3000`.

## API Endpoints
- **Upload File**
  - **Endpoint:** `POST /api/upload`
  - **Request Body:** Form-data with a file key.
  
- **Download File**
  - **Endpoint:** `POST /api/download`
  - **Request Body:** JSON with a fileUrl key.

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.