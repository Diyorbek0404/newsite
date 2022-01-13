const router = require("express").Router();
const ChildrenPost = require("../models/ChildrenPost");

//create children

router.post("/", async (req, res) => {
    const newchildrenPost = new ChildrenPost(req.body);
    try {
        const savednewChildrenpost = await newchildrenPost.save();
        res.status(200).json(savednewChildrenpost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all children
router.get("/", async (req, res) => {
    try {
        let childrenpost;
        childrenpost = await ChildrenPost.find()
        res.status(200).json(childrenpost)
    } catch (error) {
        res.status(500).json(error)
    }
})


// delete children
router.delete("/:id", async (req, res) => {
    try {
        const childrenpost = await ChildrenPost.findById(req.params.id)
        await childrenpost.delete()
        res.status(200).json("bu o'quvchi o'chirildi")
    } catch (error) {
        res.status(500).json(err)
    }
})

// update children data
router.put("/:id", async (req, res) => {
    try {
        const upchilpost = await ChildrenPost.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(upchilpost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get  children post
router.get("/:id", async (req, res) => {
    try {
        const childrenpost = await ChildrenPost.findById(req.params.id)
        res.status(200).json(childrenpost)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router