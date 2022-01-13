const router = require("express").Router();
const Post = require("../models/Post")

router.put("/", async (req, res) =>{
    // Post.findById(req.body, {
    //     new:true
    // }).exec((err, result) => {
    //     if (err) {
    //         return res.status(422).json({error,err})
    //     } else {
    //         res.json(result)
    //     }
    // })
})

module.exports = router
