


let personaOne = document.querySelectorAll('#song1')


let setPersona = function(songs) {
    
    let playThePersona = function() {

        let targetSong = songs.getAttribute(`data-sfx`)
        let playPersona = new Audio(targetSong)
        
        playPersona.play()

    }
    songs.addEventListener(`click`, playThePersona )
}

personaOne.forEach(setPersona)

