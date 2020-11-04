const mongoose = require('mongoose')

const PostMessageSchema = new mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  }
})

const PostMessage = mongoose.model('PostMessage',PostMessageSchema)

module.exports = { PostMessage }