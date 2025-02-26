addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click",addSong)
})

async function addSong(){
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []

    }

    const response = await fetch("http://localhost:3000/api/songs",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)

    })

    if(response.ok){
        const results = await response.json()
        alert("Added Song")
        //reset the form
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}