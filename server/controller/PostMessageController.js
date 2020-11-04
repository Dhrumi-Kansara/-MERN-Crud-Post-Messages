const { json } = require('body-parser')
const { PostMessage } = require('../models/PostMessage')
let ObjectId = require('mongoose').Types.ObjectId
const axios = require('axios');

exports.DisplayAll = (req, res) => {
  
  PostMessage.find({})
  .exec((err, PostMessages)=>{
    if(err) return res.status(400).json({
      message: err
    })
    else return res.json(PostMessages)
  })
}

exports.InsertOne = (req, res) => {
  console.log(req.body)
  const postmessage = new PostMessage({
    title: req.body.title,
    message: req.body.message
  })

  postmessage.save((err, doc) => {
    if(err) return res.status(400).json({
      message: err
    })
    else return res.status(200).json({
      message: 'post message inserted'
    })
  })
}

exports.getSinglePost = (req, res) => {

  if(!ObjectId.isValid(req.params.id)) 
    return res.status(400).json({
      message: 'id is invalid'
    })
    PostMessage.find({_id: req.params.id})
    .exec((err, PostMessages)=>{
      if(err) return res.status(400).json({
        message: err
      })
      else return res.json(PostMessages)
    })
}

exports.UpdateOne = (req, res) => {
  if(!ObjectId.isValid(req.params.id)) 
    return res.status(400).json({
      message: 'id is invalid'
    })
  const updatemessage = {
      title: req.body.title,
      message: req.body.message
  }
  PostMessage.findOneAndUpdate({_id: req.params.id}, {$set: updatemessage })
  .exec((err, postmessage)=>{
    if(err) return res.send(400).json({
      message: err
    })
    else return res.status(200).json({
      message: 'post message updated'
    })
  })
}

exports.DeleteOne = (req, res) => {
  if(!ObjectId.isValid(req.params.id)) 
  return res.status(400).json({
    message: err
  })

  PostMessage.findOneAndRemove({_id: req.params.id})
  .exec((err, postmessage)=>{
    if(err) return res.status(400).json({
      message: err
    })
    else return res.status(200).json({
      message: 'post message deleted'
    })
  })
}