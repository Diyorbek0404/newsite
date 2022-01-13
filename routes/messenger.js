const router = require("express").Router();
const Messenger = require("../models/Messenger");


// create message

router.post("/", async (req, res) => {
    const newMessage = new Messenger(req.body);
    try {
        const savedMessege = await newMessage.save();
        res.status(200).json(savedMessege)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get all message
router.get("/", async (req, res) => {
    try {
        let messagepost;
        messagepost = await Messenger.find()
        res.status(200).json(messagepost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete all message
router.delete("/", async (req, res) => {
    try {
        const messagepost = await Messenger.findOneAndDelete()
        res.status(200).json("message deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/all", async (req, res) => {
    try {
        const messagepost = await Messenger.deleteMany();
        messagepost.delete()
        res.status(200).json("message deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

// get one id delete 
router.delete("/:id", async (req, res) => {
    try {
        const messagepost = await Messenger.findByIdAndDelete(req.params.id)
        res.status(200).json("post id delete")
    } catch (error) {
        res.status(500).json(error)
    }
})

//get one message by id
router.get("/:id", async (req, res) => {
    try {
        const messagepost = await Messenger.findById(req.params.id)
        res.status(200).json(messagepost)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const updatemessage = await Messenger.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new: true}
        )
        res.status(200).json(updatemessage)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;