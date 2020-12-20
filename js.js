let textChange = document.getElementById("changeText");

// song 1

let audioOne = document.getElementById("song1");

function playSongOne() {
    if (audioOne.paused) {
    audioOne.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioOne.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let firstPersona = document.querySelector(`#song1`)
  firstPersona.addEventListener(`click`, playSongOne() )

//   song 2
  
  let audioTwo = document.getElementById("song2");

function playSongTwo() {
    if (audioTwo.paused) {
    audioTwo.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioTwo.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let secondPersona = document.querySelector(`#song2`)
  secondPersona.addEventListener(`click`, playSongTwo() )

//   song 3

let audioThree = document.getElementById("song3");

function playSongThree() {
    if (audioThree.paused) {
    audioThree.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioThree.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let thirdPersona = document.querySelector(`#song3`)
  thirdPersona.addEventListener(`click`, playSongThree() )

//   song 4

let audioFour = document.getElementById("song4");

function playSongFour() {
    if (audioFour.paused) {
    audioFour.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioFour.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let fourthPersona = document.querySelector(`#song4`)
  fourthPersona.addEventListener(`click`, playSongFour() )

//   song 5

let audioFifth = document.getElementById("song5");

function playSongFive() {
    if (audioFifth.paused) {
    audioFifth.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioFifth.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let fifthPersona = document.querySelector(`#song5`)
  fifthPersona.addEventListener(`click`, playSongFive() )

//   song 6

let audioSixth = document.getElementById("song6");

function playSongSix() {
    if (audioSixth.paused) {
    audioSixth.play();
    textChange.innerHTML = "You are playing a song";
  } else {
    audioSixth.pause();
    textChange.innerHTML = "You stopped the song";
  }
}
  let sixthPersona = document.querySelector(`#song6`)
  sixthPersona.addEventListener(`click`, playSongSix() )

// click on an image to play a song 

  playSongOne(0)
  playSongTwo(0)
  playSongThree(0)
  playSongFour(0)
  playSongFive(0)
  playSongSix(0)

