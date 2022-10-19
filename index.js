const express = require("express")
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan('dev'))

app.get('/', (req, res) => {
  console.log(req.query)
  res.json({ message: 'Hello World!', query: req.query })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
