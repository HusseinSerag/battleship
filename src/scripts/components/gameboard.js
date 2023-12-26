const gameBoard = (function(){
const size = 10
let board =[

]
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
    
    
    return board
    
}

return {placeShip,initalizeBoard,clearBoard}
})()

module.exports = gameBoard
