# URL shortener

A simple URL shortener built with JavaScript and Express.
It takes a long URL and generates 6 random characters (short code).
Includes a minimal frontend for quick testing.

## How it works

1. POST a long URL to "/shorten" or use the frontend form
2. You get back a short URL
3. Visit "/{shortCode}" for redirection to the original URL

## Run it locally

```bash

git clone https://github.com/robiverdev/urlshortenerjs
cd urlshortenerjs
npm install
node server.js
```

Server starts on `http://localhost:4000`

## Usage

**Shorten a URL:**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"originalUrl":"https://google.com"}' http://localhost:4000/shorten
```
Response example: {"shortUrl":"http://localhost:4000/4aGewg"}

**Visit the short URL:**

```
http://localhost:4000/4aGewg
```

Redirects to the original URL.

## What I learned

- Building HTTP servers with Express
- Handling JSON POST requests
- Generating unique short codes with nanoid
- In memory storage for quick prototyping
- HTTP redirects using Express
- Serving static frontend files
- Connecting frontend to backend using fetch API
- Minimal CSS styling for user friendly display
