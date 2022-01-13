const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const likeRoute = require("./routes/like")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const yutuqRoute = require("./routes/yutuq")
const messageRoute = require("./routes/messenger")
const childrenRoute = require("./routes/choldrenpost")
const teacherPostRoute = require("./routes/teacherpost")
const multer = require("multer")
const path = require("path")
const cors = require("cors")

dotenv.config();
app.use(express.json())
app.use(cors())
app.use("/images/",express.static(path.join(__dirname,"/images")))

const PORT =  5000
// "mongodb://localhost:27017/userdb13"
mongoose.connect("mongodb+srv://kuldashev:mO5JzQd3x8annG8z@cluster0.r6vwn.mongodb.net/maktab?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(console.log("Connected to mongodb"))
.catch((err) => console.log(err));

    const storage = multer.diskStorage({
        destination:(req, file, cb) =>{
            cb(null, "images");
        }, filename:(req,file,cb) => {
            cb(null, req.body.name)
        },
    });
app.use(cors());
const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been upload")
})


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/likes", likeRoute)
app.use("/api/children", childrenRoute)
app.use("/api/teacherpost", teacherPostRoute)
app.use("/api/yutuq", yutuqRoute);
app.use("/api/messanger", messageRoute)


// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });


app.listen(PORT, () => {
    console.log("Backend is running.", PORT);
})