//we are gonna make an event listener...it will trigger when the DOM is loaded (aka upon visitng the webpage)
addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("http://localhost:3000/api/songs") //Make sure to use the complete url (aka including http://)
    const songs = await response.json()
    
    let html = ""
    for (let song of songs){
        html +=`<li>${song.title} - ${song.artist} - ${song.genre}</li>`
    }

    document.querySelector("ul").innerHTML += html
})