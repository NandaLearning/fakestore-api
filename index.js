const express = require('express')
const app = express()
const port = 3000
const db = require("./koneksi")
const cors = require("cors")
app.use(cors())

app.get('/', (req, res) => {
  db.query("SELECT * FROM store", (error,hasil) => {
    console.log(hasil)
    res.send(hasil)
  })
})

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`)
})