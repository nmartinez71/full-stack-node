const express = require("express");
const cors = require('cors');
const path = require("path");

// Create an Express app
const app = express();

// Enable CORS for cross-origin reqruests
app.use(cors());

// Define the router for the '/api/songs' route
const router = express.Router();

// Serve static files from the "frontend" folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Sample data for songs
router.get("/songs", function(req, res) {
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
            artist: "Pharrell Williams",
            popularity: 10,
            releaseDate: new Date(2011, 9, 22),
            genre: ["new soul", "soul"]
        }
    ];
    res.json(songs); // Respond with the songs data as JSON
});

// Use the router for routes starting with '/api'
app.use("/api", router);

// Set the port for the Glitch environment
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});

