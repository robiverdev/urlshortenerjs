# URL Shortener (JavaScript/Express)

Same project, different language. 
Learning by rebuilding the same thing multiple times in different programming languages.

## How it works

1. POST a long URL to `/shorten` or use the frontend form
2. Get back a short URL
3. Visit `/{shortCode}` for redirection to the original URL

## Running locally
```bash
git clone https://github.com/robiverdev/urlshortenerjs
cd urlshortenerjs
npm install
node server.js
```

Server starts on `http://localhost:4000`

## Usage

Shorten a URL:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"originalUrl":"https://google.com"}' http://localhost:4000/shorten
```

Response example: `{"shortUrl":"http://localhost:4000/4aGewg"}`

Visit the short URL:
```
http://localhost:4000/4aGewg
```

Redirects to the original URL.

## What I learned

* Building HTTP servers with Express
* Handling JSON POST requests and parsing request bodies
* Generating unique short codes with nanoid library
* Using in memory storage with JavaScript objects
* Implementing HTTP redirects using Express
* Serving static frontend files with Express middleware
* Connecting frontend to backend using the Fetch API
* Minimal CSS styling for user friendly display

## Other implementations

- [Go](https://github.com/robiverdev/urlshortener)
- [Rust](link) *(coming soon)*
- [C](link) *(coming soon)*
