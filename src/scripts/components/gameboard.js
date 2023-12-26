const gameBoard = (function(){
    const createGameBoard = () =>{
        const size = 10
let board =[]
let missedHits = []
let ships = []
const initalizeBoard = () =>{
    for(let i = 0 ; i < size ; i++){
        board.push([0,0,0,0,0,0,0,0,0,0])
    }

}
const clearBoard = () =>{
    board = []
}
const validatePlacement = (ship,isHorizontal,row,column) =>{
    for(let i = 0 ; i < ship.getLength();i++){
        if(isHorizontal){
            if(column + i > 9 || board[row][column+i] != 0){
                return false
            }
        }
        else{
            if(row + i > 9 || board[row+i][column] !=0){
                return false
            }
        }
    }
    return true
}
const placeShip = (ship,isHorizontal,row,column) =>{
    if(!validatePlacement(ship,isHorizontal,row,column)) throw new Error()
    for(let i = 0 ; i < ship.getLength() ; i++){
        if(isHorizontal){
            
            board[row][column+i] = ship
        }
        else{
            board[row+i][column] = ship
        }
    }
    
    ships.push(ship)
    return board
    
}
const receiveAttack = ([row,column]) =>{
    if(board[row][column]){
        board[row][column].hit()
        return true
    }
    missedHits.push([row,column])
    return false
}
const getMissedHits = () => missedHits

const didAllSink = () => {
    for(let i = 0 ; i < ships.length ; i++){
        if(!ships[i].isSunk()){
            return false
        }
    }
    return true
}
return {placeShip,initalizeBoard,clearBoard , receiveAttack,getMissedHits , didAllSink}
    }
return {createGameBoard}
})()

module.exports = gameBoard
