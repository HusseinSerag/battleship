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
     let container = document.createElement('div')
        mainContainer.appendChild(renderBoard(container,boardSize))
        let choices = document.createElement('div')
        mainContainer.appendChild(renderChoices(choices))
        let startGame = document.createElement('button')
        startGame.classList.add('start-game')
        startGame.textContent = 'START BATTLE'
        mainContainer.appendChild(startGame)
        return mainContainer
}

function renderChoices(choices){
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