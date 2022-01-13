const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post")

//create post  

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update post

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, 
                    {
                        $set:req.body,
                    },
                    {new: true}
                )
                res.status(200).json(updatedPost)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can update only your post!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json("post has been deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can delete only your post!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// search-post

router.post('/searchpost',(req,res)=>{
    let postPattern = new RegExp("^"+req.body.query)
    Post.find({title:{$regex:postPattern}})
    .then(post=>{
        res.json({post})
    }).catch(err=>{
        console.log(err)
    })
})

//Get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err);
    }
})

//get all posts 
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
        if(username) {
            posts = await Post.find({username})
        } else{
            posts = await Post.find()
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/comment', async(req,res)=>{
    
})

module.exports = router