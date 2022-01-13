const router = require("express").Router();
const Yutuq = require("../models/Yutuq")

router.post("/", async (req, res) => {
    const newPost = new Yutuq(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let yutuqs;
        if(username) {
            yutuqs = await Yutuq.find({username})
        } else{
            yutuqs = await Yutuq.find()
        }
        res.status(200).json(yutuqs);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router