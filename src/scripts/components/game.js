const Ship = require('./ship.js')
const gameBoard = require('./gameboard.js')
const Player = require('./player.js')

 const game = (function(){
    let playerBoard;
    let enemyBoard;
    let player1;
    let player2;
    let ship1 = Ship.createShip(3,0,false)
    let ship2 = Ship.createShip(3,0,false)
    let ship3 = Ship.createShip(6,0,false)
    const startGame = () =>{
        playerBoard = gameBoard.createGameBoard()
        enemyBoard = gameBoard.createGameBoard()
        playerBoard.initalizeBoard()
        enemyBoard.initalizeBoard()
        playerBoard.placeShip(ship1,true,0,0)
        playerBoard.placeShip(ship3,false,2,2)
        enemyBoard.placeShip(ship2,false,0,0)
        player1 = Player.createPlayer()
        player2 = Player.createPlayer('AI')
        Player.setCurrentPlayer(player1)
        
    }
    
    const getPlayerBoard = () => playerBoard
    const getEnemyBoard = () => enemyBoard
    
    return {startGame,getPlayerBoard,getEnemyBoard}
})()

module.exports = game
