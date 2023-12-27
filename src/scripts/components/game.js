const Ship = require('./ship.js')
const gameBoard = require('./gameboard.js')
const Player = require('./player.js')

 const game = (function(){
    let playerBoard;
    let enemyBoard;
    let player1;
    let player2;
    const startGame = () =>{
        playerBoard = gameBoard.createGameBoard()
        enemyBoard = gameBoard.createGameBoard()
        player1 = Player.createPlayer()
        player2 = Player.createPlayer('AI')
    
    }
    const x  = () => playerBoard
    return {startGame,x}
})()

module.exports = game
