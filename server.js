const express = require('express')
const app = express()
const port = 4000


app.start(port, () => {
  console.log(`Listening on port ${port}`)
})
