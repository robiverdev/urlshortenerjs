const express = require("express")

const app = express()
const PORT = 4000

app.get("/", (req, res) => {
  res.send("URL Shortener Homepage")
})

// Middleware - parse JSON
app.use(express.json())

app.post("/shorten", (req,res) => {
  const {originalUrl} = req.body
  if(!originalUrl) {
    return res.status(400).send("URL is required!")
  }
  res.send("URL status OK")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
