const express = require('express')
const { DisplayAll, InsertOne, UpdateOne, DeleteOne, getSinglePost } = require('../controller/PostMessageController')
const router = express.Router()

router.get('/', DisplayAll)

router.post('/', InsertOne)

router.get('/:id',getSinglePost)

router.put('/:id', UpdateOne)

router.delete('/:id', DeleteOne)

module.exports=router