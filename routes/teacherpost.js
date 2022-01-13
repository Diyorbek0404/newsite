const router = require("express").Router();
const TeacherPost = require("../models/TeacherPost")

router.post("/", async (req, res) => {
    const newPost = new TeacherPost(req.body);
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
        let teacherposts;
        if(username) {
            teacherposts = await TeacherPost.find({username})
        } else{
            teacherposts = await TeacherPost.find()
        }
        res.status(200).json(teacherposts);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router