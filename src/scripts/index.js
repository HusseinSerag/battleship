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
let correctBoard;
startBtn.addEventListener('click',()=>{
    DOM.clearScreen()
    document.body.appendChild(shipRendering)
    let choiceContainer = document.querySelector('.choices')
    let choices = document.querySelectorAll('.choices .ship')
    let boardToBe = document.querySelectorAll('.board-start-container .board-start-div')
    let coordinatesAndDirection = []
    let dragged;
    choices.forEach(choice =>{
        choice.addEventListener('drag',(event)=>{
            dragged = event.target
        })
    })
    
    for(let i = 0 ; i < boardToBe.length ; i++){
        boardToBe[i].addEventListener('dragover',(e)=>{
            e.preventDefault()
            let choice = document.querySelector('input[type=checkbox]')
            
        })
        boardToBe[i].addEventListener('drop',(e)=>{
            console.log(i)
            e.preventDefault()
            let choice = document.querySelector('input[type=checkbox]')
            if(choice.checked){
                if(DOM.checkIfCorrectPlacement(i,dragged,0,boardToBe) != false){
                    let number
                    if(String(i).length == 2)
                    {
                        number = String(i).split('').map(Number)
                        
                        coordinatesAndDirection.push({row:number[0],column:number[1],direction:false})
                    }
                        
                    else
                    {
                        number = i
                        coordinatesAndDirection.push({row:0,column:number,direction:false})
                    }
                        
                    
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        let location = document.createElement('div')
                        location.classList.add('location')
                        
                        boardToBe[i+z].appendChild(location)
                        
                       
                    }
                    choiceContainer.removeChild(dragged)
                }
            }
            else{
                if(DOM.checkIfCorrectPlacement(i,dragged,1,boardToBe) != false){
                    let number
                    if(String(i).length == 2)
                    {
                        number = String(i).split('').map(Number)
                        coordinatesAndDirection.push({row:number[0],column:number[1],direction:true})
                        
                    }
                        
                    else
                    {
                       
                        number = i
                        coordinatesAndDirection.push({row:0,column:number,direction:true})
                    }
                       
                    
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
                        let location = document.createElement('div')
                        location.classList.add('location')
                        boardToBe[i+j].appendChild(location)
                       
                    }
                    choiceContainer.removeChild(dragged)
                    console.log(coordinatesAndDirection)
                }
            }
        })
    }
    
})

let isAllSunk = false
startGame.addEventListener('click',()=>{
    
    let boardToBe = document.querySelectorAll('.board-start-container .board-start-div')
    console.log(Array.from(boardToBe))
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
let hit
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
                    const [containerDone,shadowDone] = DOM.endGame(Game.getPlayer1())
                    document.body.appendChild(containerDone)
                    document.body.appendChild(shadowDone)
                    document.querySelector('.reset-btn').addEventListener('click',()=>{
                        DOM.clearScreen()
                        document.body.appendChild(shipRendering)
                    })
                    
                    
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
                let [container,shadow] = DOM.endGame(Game.getPlayer2())
                document.body.appendChild(container)
                document.body.appendChild(shadow)
                document.querySelector('.reset-btn').addEventListener('click',()=>{
                    DOM.clearScreen()
                    document.body.appendChild(shipRendering)
                })
                
                
               
                }
                }
                
               }
               
            }catch(error){
                
            }
        }
        
        
       
    })
}
}


