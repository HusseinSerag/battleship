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

let isAllSunk = false
startGame.addEventListener('click',()=>{
    DOM.clearScreen()
    Game.startGame()
    document.body.appendChild(gamePlayBoard)
    renderGame(gamePlayBoard)
})

function renderGame(){
    console.log('here')
    playerBoard = gamePlayBoard.querySelectorAll('.player-container .board-start-container .board-start-div')
     computerBoard = gamePlayBoard.querySelectorAll('.computer-container .board-start-container .board-start-div')
    
    DOM.populateBoard(playerBoard,Game.getPlayerBoard(),Game.getPlayerBoard().getShips())
    DOM.populateBoard(computerBoard,Game.getEnemyBoard(),Game.getEnemyBoard().getShips())
    
let chosenX , chosenY , result , sunk = false

for(let i = 0 ; i < computerBoard.length ; i++){
    computerBoard[i].addEventListener('click',()=>{
         
        if(isAllSunk == false){
            try{
                [hit, isAllSunk ]=  Game.playRound(i,'Player')
                
                

                
               if(hit)
               {
                Array.from((computerBoard[i]).children)[0].classList.add('visible')
               }
               else{
                let div = document.createElement('div')
                div.classList.add('missed')
                computerBoard[i].appendChild(div)
               }
               if(isAllSunk){
                gamePlayBoard = DOM.gamePlay()
                isAllSunk = false
                DOM.clearScreen()
                
                document.body.appendChild(shipRendering)
               }
               else{
                if(sunk == false){
                    [chosenX , chosenY , result , sunk] = [...Game.AIMove()]
                console.log(chosenX , chosenY , result , sunk)
                if(!result)
                {
                    if(chosenX == 0){
                        let div = document.createElement('div')
                    div.classList.add('missed')
                    playerBoard[chosenY].appendChild(div)
                        
                    }else{
                        let stringNumber = `${chosenX}${chosenY}`
                        let number = Number(stringNumber)
                        console.log(number)
                        let div = document.createElement('div')
                    div.classList.add('missed')
                    playerBoard[number].appendChild(div)
                    }
                }
                else{
                    if(chosenX == 0){
                        
                    Array.from((playerBoard[chosenY]).children)[0].classList.add('hit')
                        
                    }else{
                        let stringNumber = `${chosenX}${chosenY}`
                        let number = Number(stringNumber)
                        console.log(number)
                        Array.from((playerBoard[number]).children)[0].classList.add('hit')
                    }
                }
                if(sunk){
                    gamePlayBoard = DOM.gamePlay()
                    sunk = false
                DOM.clearScreen()
                
                document.body.appendChild(shipRendering)
                }
                }
                
               }
               
            }catch(error){
                
            }
        }
        
        
       
    })
}
}


