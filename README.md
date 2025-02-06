# Discord File API

A Node.js Express API for uploading and downloading files using Discord as storage.

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

### Upload File
**Endpoint:** `POST /api/upload`

Upload a file to Discord storage.

```http
POST /api/upload
Content-Type: multipart/form-data

file: <your_file>
```

**Response:**
```json
{
  "fileLink": "https://cdn.discordapp.com/attachments/..."
}
```

### Download File
**Endpoint:** `POST /api/download`

Download a file from Discord storage.

```http
POST /api/download
Content-Type: application/json

{
  "fileUrl": "https://cdn.discordapp.com/attachments/..."
}
```

**Response:** Binary file data with appropriate content type

## Testing the API

### Using the Web Interface
1. Upload: Visit `http://localhost:3000/upload.html`
2. Download: Visit `http://localhost:3000/download.html`

### Using cURL

**Upload:**
```bash
curl -X POST -F "file=@/path/to/your/file.pdf" http://localhost:3000/api/upload
```

**Download:**
```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"fileUrl":"YOUR_DISCORD_FILE_URL"}' \
  http://localhost:3000/api/download \
  --output downloaded_file.pdf
```

## Error Responses

The API uses standard HTTP status codes:

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 400 | Bad Request - Missing file or invalid URL |
| 500 | Server Error - Upload/download failed |

Error response format:
```json
{
  "error": "Error message description"
}
```

## Contributing
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.