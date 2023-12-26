const gameBoard = (function(){
    const createGameBoard = () =>{
        const size = 10
let board =[]
let missedHits = []
let ships = []
let hits = []
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
        hits.forEach(hit =>{
            let [a,b] = [...hit]
            if(a == row && b == column){
                throw new Error()
            }
        })
        
            board[row][column].hit()
            hits.push([row,column])
            console.log(hits)
            return true
        
        
        
        
    }
    missedHits.push([row,column])
    return false
}
const getMissedHits = () => missedHits
const getHits = () => hits
const didAllSink = () => {
    for(let i = 0 ; i < ships.length ; i++){
        if(!ships[i].isSunk()){
            return false
        }
    }
    return true
}
return {placeShip,initalizeBoard,clearBoard , receiveAttack,getMissedHits , didAllSink ,getHits}
    }
return {createGameBoard}
})()

module.exports = gameBoard
