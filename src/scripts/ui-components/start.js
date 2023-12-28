import '../../styles/start.css'
export function renderStart(){
   
    let container = document.createElement('div')
    container.classList.add('start-container')

    let h1 = document.createElement('h1')
    h1.classList.add('welcome-text')
    h1.textContent = 'Welcome to Battleship!'

    let button = document.createElement('button')
    button.classList.add('start-button')
    button.textContent = 'Start'

    container.appendChild(h1)
    container.appendChild(button)
    return container
}

export function renderPlaceShipsOnBoard(boardSize=100){
    
    let mainContainer = document.createElement('div')
    mainContainer.classList.add('start-and-choice')
        renderBoardAndChoices(mainContainer,boardSize)
        let startGame = document.createElement('button')
        let reset = document.createElement('button')
        reset.textContent = 'RESET CHANGES'
        reset.classList.add('reset-btn-options')
        startGame.classList.add('start-game')
        startGame.textContent = 'START BATTLE'
        mainContainer.appendChild(reset)
        mainContainer.appendChild(startGame)
        return mainContainer
}

export function renderBoardAndChoices(mainContainer,boardSize){
    let container = document.createElement('div')
        mainContainer.appendChild(renderBoard(container,boardSize))
        let choices = document.createElement('div')
        mainContainer.appendChild(renderChoices(choices))
}



function renderChoices(choices){
    let ships = [
        {
            name:"Boat",
            length:2
        },{
            name:"Submarine",
            length:3
        },{
            name:"Destroyer",
            length:3
        },{
            name:"Compressor",
            length:4
        },{
            name:"Defender",
            length:5
        }
        
    ]
    for(let i = 0 ; i < ships.length ; i++){
        let div = document.createElement('div')
        div.classList.add('ship')
        div.draggable = true
        div.textContent = `${ships[i].name} (${ships[i].length})`
        div.setAttribute('length',ships[i].length)
        choices.appendChild(div)
    }
    choices.classList.add('choices')
    let label = document.createElement('label')
    let span = document.createElement('span')
    label.classList.add('label-element')
    let input = document.createElement('input')
    input.type = 'checkbox'
    span.textContent = 'rotate'
    label.appendChild(input)
    label.appendChild(span)
    
    
    choices.appendChild(label)
    return choices
}
function renderBoard(container,boardSize){
    container.classList.add('board-start-container')
    for(let i = 0 , j = 64 ; i < 11 ; i++ , j++){
        let boardDiv = document.createElement('div')
        if(i == 0){
            boardDiv.textContent = ''
        }
        else{
            boardDiv.textContent = String.fromCharCode(j)
        }
        
        boardDiv.classList.add('board-start-div-letters')
        container.appendChild(boardDiv)
    }

    for(let i = 0 ; i < boardSize  ; i++){
        let boardDiv = document.createElement('div')

        boardDiv.classList.add('board-start-div')
        container.appendChild(boardDiv)
    }
    for(let i = 0 , j = 0 ; i < 100 ; j++,i = i+11){
        let boardDiv = document.createElement('div')
        boardDiv.classList.add('board-start-div-numbers')
        boardDiv.textContent = j + 1
        container.insertBefore(boardDiv,Array.from(container.children)[i+11])
        
    }
    return container
}

export function clearScreen(){
    Array.from(document.body.children).forEach(child=>{
        document.body.removeChild(child)
    })
}

export function gamePlay(){
    Array.from(document.body.children).forEach(child=>{
        document.body.removeChild(child)
    })
    let mainContainer = document.createElement('div')
    mainContainer.classList.add('game-container')

    let player = document.createElement('div')
    player.classList.add('player-container')
    let Computer = document.createElement('div')
    Computer.classList.add('computer-container')

    player.appendChild(header('Your Fleet'))
    Computer.appendChild(header('Computer\'s Fleet'))
    let containerPlayer = document.createElement('div')
    let containerComputer = document.createElement('div')
    player.appendChild(renderBoard(containerPlayer , 100))
    Computer.appendChild(renderBoard(containerComputer , 100))

    mainContainer.appendChild(player)
    mainContainer.appendChild(Computer)
    return mainContainer
}

function header(text){
    let div = document.createElement('div')
    div.classList.add('player-fleet')
    div.textContent = text
    return div
    
}


export function populateBoard(arrayOfDivs , gameBoard,ships){
    let gameBoard1D = []
    
    for(let i = 0 ; i < 10; i++){
        for(let j = 0 ;  j < 10 ; j++){
            gameBoard1D.push(gameBoard.board[i][j])
        }
    }
   
    for(let i = 0 ; i < gameBoard1D.length ; i++){
        if(gameBoard1D[i]){
            for(let j = 0 ; j < ships.length ; j++){
                if(ships[j] == gameBoard1D[i]){
                    
                    
                    
                    let picked = document.createElement('div')
                    picked.classList.add(`picked-ball-${ships[j].getLength()}`)
                    arrayOfDivs[i].classList.add(`picked-${ships[j].getLength()}`)
                    arrayOfDivs[i].appendChild(picked)
                }
                
            }
            
        }
    }

}


export function endGame(winner){
    
    let container = document.createElement('div')
    container.classList.add('end-game')
    let shadow = document.createElement('div')
    shadow.classList.add('shadow')
    let resetButton = document.createElement('button')
    resetButton.classList.add('reset-btn')
    resetButton.textContent = 'Reset'
    let winnerText = document.createElement('div')
    winnerText.classList.add('winner-text')
    winnerText.textContent = `${winner.playerUserName} has won the game!`
    container.appendChild(winnerText)
    container.appendChild(resetButton)
    return [container,shadow]
}

export function checkIfCorrectPlacement(i,dragged,index,boardToBe){
    let number
    if(String(i).length == 2)
        number = Number(String(i).split('')[index])
    else
        number = i      
    console.log(number)
    if(String(i).length == 1 && index == 0){
        
    }
    if(number + Number(dragged.getAttribute('length')) -1 >=10){ 
        if(String(i).length == 1 && index == 0){
        
        }else{
            return false
        }
        
    }
    if(index ==0){
        for(let j = 0  , z = 0; j < Number(dragged.getAttribute('length')) ; z =z+10 ,j++){
            
            if(Array.from(boardToBe[i+z].children).length != 0){
                console.log('something is in the way')
                return false
            }
            
           
        }
    }
    else{
        for(let j = 0  ; j < Number(dragged.getAttribute('length')) ;  j++){
            if(Array.from(boardToBe[i+j].children).length != 0){
                console.log('something is in the way')
                return false
            }
           
        }
    }
}