const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/PostManagerDB', 
{useNewUrlParser: true, 
  useUnifiedTopology: true
},
err=>{
  if(!err) console.log('db connected')
  else console.log('error '+JSON.stringify(err, undefined, 2))
})


mongoose.set('useFindAndModify', true);
