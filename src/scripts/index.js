import * as DOM from './ui-components/start.js'
const Game = require('./components/game.js')



let gamePlayBoard = DOM.gamePlay()
let playerBoard
let computerBoard

let shipRendering = DOM.renderPlaceShipsOnBoard()
let startGame = shipRendering.querySelector('.start-game')

let resetButton = shipRendering.querySelector('.reset-btn-options')

let startScreen = DOM.renderStart()
document.body.appendChild(startScreen)
let startBtn = startScreen.querySelector('.start-button')
let correctBoard;
let coordinatesAndDirection = []



startBtn.addEventListener('click',()=>{
    DOM.clearScreen()
    coordinatesAndDirection = []
    startGame.disabled = true
    document.body.appendChild(shipRendering)
    dragDrop()
    
    
})
function dragDrop(){
    let choiceContainer = document.querySelector('.choices')
    let choices = document.querySelectorAll('.choices .ship')
    let boardToBe = document.querySelectorAll('.board-start-container .board-start-div')
    
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
            
            if(choice.checked){
                if(DOM.checkIfCorrectPlacement(i,dragged,0,boardToBe) != false){
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        if(boardToBe[i+z])
                        boardToBe[i+z].classList.add('green')
                        
                       
                    }
                }
                else{
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        if(boardToBe[i+z])
                        boardToBe[i+z].classList.add('red')
                        
                       
                    }
                }
                
                
            }
            else{
                if(DOM.checkIfCorrectPlacement(i,dragged,1,boardToBe) != false){
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
                        boardToBe[i+j].classList.add('green')
                       
                    }
                }
                else{
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
                        let number
                    if(String(i).length == 2)
                        number = Number(String(i).split('')[1])
                    else
                        number = i      
    
                        if(boardToBe[i+j] && number+j < 10)
                        {
                            boardToBe[i+j].classList.add('red')
                            
                        }
                    }
                }
            }
            
        })
        
        boardToBe[i].addEventListener('dragleave',(e)=>{
            e.preventDefault()
            let choice = document.querySelector('input[type=checkbox]')
            
            if(choice.checked){
                if(DOM.checkIfCorrectPlacement(i,dragged,0,boardToBe) != false){
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        if(boardToBe[i+z])
                        boardToBe[i+z].classList.remove('green')
                        
                       
                    }
                    
                }
                else{
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        if(boardToBe[i+z])
                        boardToBe[i+z].classList.remove('red')
                        
                       
                    }
                }
                
                
            }
            else{
                if(DOM.checkIfCorrectPlacement(i,dragged,1,boardToBe) != false){
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
                        boardToBe[i+j].classList.remove('green')
                       
                    }
                }
                else{
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){

                        if(boardToBe[i+j])
                        boardToBe[i+j].classList.remove('red')
                       
                    }
                }
            }
            
        })

        
        boardToBe[i].addEventListener('drop',(e)=>{
            for(let j = 0 ; j < boardToBe.length ; j++){
                boardToBe[j].classList.remove('red')
                boardToBe[j].classList.remove('green')
            }
            e.preventDefault()
            let choice = document.querySelector('input[type=checkbox]')
            if(choice.checked){
                if(DOM.checkIfCorrectPlacement(i,dragged,0,boardToBe) != false){
                    let number
                    if(String(i).length == 2)
                    {
                        number = String(i).split('').map(Number)
                        
                        coordinatesAndDirection.push({row:number[0],column:number[1],direction:false , length:Number(dragged.getAttribute('length'))})
                    }
                        
                    else
                    {
                        number = i
                        coordinatesAndDirection.push({row:0,column:number,direction:false, length:Number(dragged.getAttribute('length'))})
                    }
                        
                    
                    for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
                        let location = document.createElement('div')
                        location.classList.add('location')
                        
                        boardToBe[i+z].appendChild(location)
                        
                       
                    }
                    choiceContainer.removeChild(dragged)
                    if(coordinatesAndDirection.length == 5){
                        startGame.disabled = false
                    }
                }
            }
            else{
                if(DOM.checkIfCorrectPlacement(i,dragged,1,boardToBe) != false){
                    let number
                    if(String(i).length == 2)
                    {
                        number = String(i).split('').map(Number)
                        coordinatesAndDirection.push({row:number[0],column:number[1],direction:true, length:Number(dragged.getAttribute('length'))})
                        
                    }
                        
                    else
                    {
                       
                        number = i
                        coordinatesAndDirection.push({row:0,column:number,direction:true, length:Number(dragged.getAttribute('length'))})
                    }
                       
                    
                    for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
                        let location = document.createElement('div')
                        location.classList.add('location')
                        boardToBe[i+j].appendChild(location)
                       
                    }
                    choiceContainer.removeChild(dragged)
                    if(coordinatesAndDirection.length == 5){
                        startGame.disabled = false
                    }
                }
            }
        })
    }
}
let isAllSunk = false
startGame.addEventListener('click',()=>{
    let boardToBe = document.querySelectorAll('.board-start-container .board-start-div')
    
    DOM.clearScreen()
    Game.startGame(coordinatesAndDirection)
    
    document.body.appendChild(gamePlayBoard)
    renderGame(gamePlayBoard)
})
resetButton.addEventListener('click',()=>{
        
    let container = shipRendering.querySelector('.board-start-container')
    let choices = shipRendering.querySelector('.choices')
    
    shipRendering.removeChild(container)
    shipRendering.removeChild(choices)
    DOM.renderBoardAndChoices(shipRendering,100)
     container = shipRendering.querySelector('.board-start-container')
     choices = shipRendering.querySelector('.choices')
     shipRendering.removeChild(container)
    shipRendering.removeChild(choices)
    shipRendering.insertBefore(container,resetButton)
    shipRendering.insertBefore(choices,resetButton)
    dragDrop()
    coordinatesAndDirection = []
    startGame.disabled = true
})


function renderGame(){
    
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
                
                if(!result)
                {
                    if(chosenX == 0){
                        let div = document.createElement('div')
                    div.classList.add('missed')
                    playerBoard[chosenY].appendChild(div)
                        
                    }else{
                        let stringNumber = `${chosenX}${chosenY}`
                        let number = Number(stringNumber)
                        
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


