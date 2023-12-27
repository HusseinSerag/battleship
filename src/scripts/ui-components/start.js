import '../../styles/start.css'
export function renderStart(){
    Array.from(document.body.children).forEach(child=>{
        document.body.removeChild(child)
    })
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
     Array.from(document.body.children).forEach(child=>{
        document.body.removeChild(child)
    })
    let mainContainer = document.createElement('div')
    mainContainer.classList.add('start-and-choice')
     let container = document.createElement('div')
        mainContainer.appendChild(renderBoard(container,boardSize))
        let choices = document.createElement('div')
        mainContainer.appendChild(renderChoices(choices))
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