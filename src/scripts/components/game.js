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
        player1 = Player.createPlayer('','P1')
        player2 = Player.createPlayer('AI','P2')
        Player.setCurrentPlayer(player1)
        
    }
    
    const getPlayerBoard = () => playerBoard
    const getEnemyBoard = () => enemyBoard
    const playRound = (number,attacker) =>{
        let coord = String(number)
        if (coord.length == 1){
            coord = '0'+coord
        }
        
       let [row,column] = [...coord.split('').map(Number)]
        console.log(`${Player.getCurrentPlayer().playerUserName}'s turn`)
        if(Player.getCurrentPlayer() == player1 && attacker == 'Computer'){
            throw new Error('Wrong Board')
        }
        else if(Player.getCurrentPlayer() == player2 && attacker == 'Player'){
            throw new Error('Wrong Board')
        }
        if(attacker == 'Player'){
            try{
                console.log(enemyBoard)
                enemyBoard.receiveAttack([row,column])
                console.log(enemyBoard.board)
                console.log(enemyBoard.getMissedHits())
                console.log(enemyBoard.getHits())
            }
            catch(err){
                console.log(err)
                throw err
            }
        }
        Player.changeCurrentPlayer(player2 , player1)
    }
    return {startGame,getPlayerBoard,getEnemyBoard,playRound}
})()

module.exports = game
