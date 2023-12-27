const gameBoard = (function(){
    const createGameBoard = () =>{
        const size = 10
let board =[]
let missedHits = []
let ships = []
let shipHits = []
let allHits = []
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
    allHits.forEach(hit=>{
        let [a,b] = [...hit]
        if(a == row && b == column){
            throw new Error()
        }
    })
    if(board[row][column]){

        shipHits.forEach(hit =>{
            let [a,b] = [...hit]
            if(a == row && b == column){
                throw new Error()
            }
        })
        
        
            board[row][column].hit()
            shipHits.push([row,column])
            allHits.push([row,column])
            return true
        
        
        
        
    }
    missedHits.push([row,column])
    allHits.push([row,column])
    return false
}
const getMissedHits = () => missedHits
const getHits = () => shipHits
const getShips = () => ships
const didAllSink = () => {
    for(let i = 0 ; i < ships.length ; i++){
        if(!ships[i].isSunk()){
            return false
        }
    }
    return true
}
return {placeShip,initalizeBoard,clearBoard , receiveAttack,getMissedHits , didAllSink ,getHits,board,allHits , getShips}
    }
return {createGameBoard}
})()

module.exports = gameBoard
