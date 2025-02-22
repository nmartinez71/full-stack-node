addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()
    let html = ""
    //we can grab the id from the db when we request a list of all songs from the db
    //in mongodb this field is known as _id
    //this id is generated automatically by default in mongo which is why we did not make an id field when we made a model in the backend
    //thus it works the same way any other field/parameter works  ie... song.title, song.artist, song._id
    for(let song of songs){
        //grab the id of the song and store it in a var called songID
        let songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html