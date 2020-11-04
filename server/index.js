require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const PostMessageRoutes = require('./routes/PostMessageRoute')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin','*')
//   res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, X-Auth-Token')
  
//   if(req.method==='OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
//     res.status(200).json({})
//   }

// })

app.use('/PostMessages', PostMessageRoutes)

app.get('/',(req, res) => {
  res.status(200).json({
    message: 'this is a test message'
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>console.log(`server started at port ${PORT}`))
