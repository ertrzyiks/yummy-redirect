const express = require('express')

const app = express()

app.use((req, res) => {
  res.redirect(301, 'https://kuchnia-yummy.pl' + req.path)
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`App listening on port ${port}!`))
