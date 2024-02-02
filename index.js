const express = require('express') // thu vien dependencies
const app = express() // doi tuong, web app,...
const port = 3000

//route config
app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})