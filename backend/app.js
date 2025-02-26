//const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router()
//const bodyParser = require('body-parser')
const Song = require("./models/songs")
const User = require("./models/users")

//app.use(bodyParser.json())
app.use(express.json())

// Enable CORS for all routes
//app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/api", router)

router.post("/user", async(req,res) =>{
  if(!req.body.username || !req.body.password){
     res.status(400).json({error: "Missing username or passwword"})
  }
  const newUser = await new User({
     username: req.body.username,
     password: req.body.password,
     status: req.body.status
  })
  try{
     await newUser.save()
     console.log(newUser)
     res.sendStatus(201) //created
  }
  catch(err){
     res.status(400).send
  }
})

//authenticate a user to sign in
router.post("/auth", async(req,res) =>{
  if(!req.body.username || !req.body.password){
     res.status(401).json({error: "Missing username or password"})
     return
  }
  //find the user in the database
  try{
     const user = await User.findOne({username: req.body.username})
     if (!user){
        res.status(401).json({error: "User not found"})
    
     }
     else{
        //check the username and password to see if they match
        if(user.password === req.body.password){
           //create a token
           const token = jwt.encode({username: user.username}, secret)
           res.json({token: token, username: user.username})
        }
        else{
           res.status(401).json({error: "Invalid password"})
        }
     }
  }
  catch(err){
     res.status(400).send(err.message)
  } 
  })



//get songs from db - nef
router.get("/songs", async(req,res) => {
  let query = {}
  if (req.query.genre){
    query = {genre : req.query.genre}
  }

  //to find all songs in a db just use the find() method within the try/catch thats built into mongoose
  try {
    const songs = await Song.find(query); // This will return a promise
    res.json(songs); // Send the result as a response
  } catch (err) {
    res.status(400).send(err); // Handle any errors
  }
  
});

router.post("/songs", async (req, res) =>{
  try{
    const song = await new Song(req, body)
    await song.save()
    res.stat
    console.log(song)
  }
  catch{
    res.status(400).send(err)
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
