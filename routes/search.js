const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/Post");


router.post('/search-users',(req,res)=>{
    let postPattern = new RegExp("^"+req.body.query)
    Post.find({title:{$regex:postPattern}})
    .select("_id title")
    .then(post=>{
        res.json({post})
    }).catch(err=>{
        console.log(err)
    })
})