const express = require("express")
//ENSURE CORS IS ACTIVE IN ORDER FOR HOSTING BACKEND AND FRONTEND ON THE SAME DEVICE & SCRIPTS FROM OUTSIDE SOURCES (EX. Index.html using the script.js files)
var cors = require('cors')
//activate or tell this app variable to be an express server
const app = express()
app.use(cors())
const router = express.Router()


//making an api using routes
// Routes are used to handle browser requests.  The look like URLs.  The difference is that when a browser requests a route, it is dynamically handled by using a function.

router.get("/songs", function(req,res){
    const songs = [
        {
            title: "We Found Love",
            artist: "Rihanna",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["electro house"]
        },
        {
            title: "Happy",
            artist: "Pharell Williams",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["new soul", "soul"]
        }/* ,
        {
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["funk", "boogie"]
        },
        {
            title: "Uptown Funk",
            artist: "Bruno Mars",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["funk", "boogie"]
        } */
    ]
    res.json(songs)
})

//all requests that usually use an an api star with api...so the url would be localhost:3000/api/songs
app.use("/api", router)
//start web server...app.listen(portnumber,function)
app.listen(3000,function(){
    console.log("Listening on port 3000")
})
//GET or a regular request when someone goes to http://localhost:3000/api/songs.  When using a function an a route, we almost always have a parameter or handle a response and request
//http://localhost:3000/goodbye
/* app.get("/hello", function(req,res){
    res.send("<h1>Hello Express</h1>")
})
app.get("/goodbye", function(req, res) {
    res.send("<h1>Goodbye, Express!</h1>");
 }); */