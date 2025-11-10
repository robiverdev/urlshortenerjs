const express = require("express")
const {nanoid} = require("nanoid")

const app = express()
const PORT = 4000

// Serves static files (html, js, css)
app.use(express.static(__dirname))

// Middleware - parse JSON
app.use(express.json())

const urls = {}

app.post("/shorten", (req,res) => {
  const {originalUrl} = req.body
  if(!originalUrl) {
    return res.status(400).send("URL is required!")
  }

  const shortId = nanoid(6)
  urls[shortId] = originalUrl
  res.json({shortUrl: `http://localhost:${PORT}/${shortId}`})
})

app.get("/:id", (req,res) => {
  const originalUrl = urls[req.params.id]
  if(originalUrl) {
    res.redirect(originalUrl)
  } else {
    res.status(400).send("URL not found!")
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
