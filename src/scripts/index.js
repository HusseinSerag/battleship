import * as startDOM from './ui-components/start.js'
const Game = require('./components/game.js')


let gamePlayBoard = startDOM.gamePlay()
/*
let shipRendering = startDOM.renderPlaceShipsOnBoard()
let startGame = shipRendering.querySelector('.start-game')

let startScreen = startDOM.renderStart()
document.body.appendChild(startScreen)
let startBtn = startScreen.querySelector('.start-button')

startBtn.addEventListener('click',()=>{
    startDOM.clearScreen()
    document.body.appendChild(shipRendering)
    
})

startGame.addEventListener('click',()=>{
    startDOM.clearScreen()
    Game.startGame()
    document.body.appendChild(gamePlayBoard)
    
    
})
*/
startDOM.clearScreen()
document.body.appendChild(gamePlayBoard)