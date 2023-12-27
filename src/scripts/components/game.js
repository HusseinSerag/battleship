const Ship = require('./ship.js')
const gameBoard = require('./gameboard.js')
const Player = require('./player.js')

 const game = (function(){
    let shipLengths = [2,3,3,4,5]
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
        ship1 = Ship.createShip(3,0,false)
        ship2 = Ship.createShip(3,0,false)
        ship3 = Ship.createShip(6,0,false)
        playerBoard.placeShip(ship1,true,0,0)
        playerBoard.placeShip(ship3,false,2,2)
       let j = 0 
       let trueOrFalse = [true,false]
       while(j < shipLengths.length){
        try{
            let ship = Ship.createShip(shipLengths[j],0,false)
            enemyBoard.placeShip(ship,trueOrFalse[Math.floor(Math.random()*trueOrFalse.length)],Math.floor(Math.random()*10),Math.floor(Math.random()*10))
            j++
        }catch(Error){
            
        }
       }
        
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
                let result = enemyBoard.receiveAttack([row,column])
                let isSunken = enemyBoard.didAllSink()
                Player.changeCurrentPlayer(player2 , player1)
                return [result,isSunken]
                
            }
            catch(err){
                console.log(err)
                throw err
            }
        }
        else{
            Player.changeCurrentPlayer(player2 , player1)
        }
        

    }
    return {startGame,getPlayerBoard,getEnemyBoard,playRound}
})()

module.exports = game
