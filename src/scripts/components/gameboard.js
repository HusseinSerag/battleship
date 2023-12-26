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
const placeShip = (ship,isHorizontal,row,column) =>{
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
