
let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

let home = 0
let away = 0

function addOne() {
  home = home + 1
  homeEl.innerText = home 
}

function addTwo() {
  home = home + 2
  homeEl.innerText = home 
}

function addThree() {
  home = home + 3
  homeEl.innerText = home 
}

function awayOne() {
  away = away + 1
  awayEl.innerText = away
}

function awayTwo() {
  away = away + 2
  awayEl.innerText = away
}

function awayThree() {
  away = away + 3
  awayEl.innerText = away
}

function newGame() {
  away = 0
  home = 0
  awayEl.innerText = away
  homeEl.innerText = home
}
