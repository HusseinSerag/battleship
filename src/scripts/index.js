import * as DOM from './ui-components/start.js'
const Game = require('./components/game.js')


let gamePlayBoard = DOM.gamePlay()
let playerBoard
    let computerBoard

let shipRendering = DOM.renderPlaceShipsOnBoard()
let startGame = shipRendering.querySelector('.start-game')

let startScreen = DOM.renderStart()
document.body.appendChild(startScreen)
let startBtn = startScreen.querySelector('.start-button')

startBtn.addEventListener('click',()=>{
    DOM.clearScreen()
    document.body.appendChild(shipRendering)
    
})

startGame.addEventListener('click',()=>{
    DOM.clearScreen()
    Game.startGame()
    
    Game.getEnemyBoard()
    document.body.appendChild(gamePlayBoard)
     playerBoard = document.querySelectorAll('.player-container .board-start-container .board-start-div')
     computerBoard = document.querySelectorAll('.computer-container .board-start-container .board-start-div')
    
    DOM.populateBoard(playerBoard,Game.getPlayerBoard(),Game.getPlayerBoard().getShips())
    DOM.populateBoard(computerBoard,Game.getPlayerBoard(),Game.getPlayerBoard().getShips())
    
for(let i = 0 ; i < playerBoard.length ; i++){
    playerBoard[i].addEventListener('click',()=>{
        try{
            Game.playRound(i,'Computer')
        }catch(error){

        }
       
    })
}
for(let i = 0 ; i < computerBoard.length ; i++){
    computerBoard[i].addEventListener('click',()=>{
        try{
            Game.playRound(i,'Player')
        }catch(error){
            
        }
       
    })
}
})


