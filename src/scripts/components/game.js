const Ship = require('./ship.js')
const gameBoard = require('./gameboard.js')
const Player = require('./player.js')

 const game = (function(){
    let shipLengths = [2,3,3,4,5]
    let playerBoard;
    let enemyBoard;
    let player1;
    let player2;
   
    const startGame = (coordinatesAndDirection) =>{
        playerBoard = gameBoard.createGameBoard()
        enemyBoard = gameBoard.createGameBoard()
        playerBoard.initalizeBoard()
        enemyBoard.initalizeBoard()
        for(let i = 0 ; i < coordinatesAndDirection.length ; i++){
            let ship = Ship.createShip(coordinatesAndDirection[i].length , 0 , false)
            
            playerBoard.placeShip(ship,coordinatesAndDirection[i].direction,coordinatesAndDirection[i].row,coordinatesAndDirection[i].column)
        }
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
        
        if(Player.getCurrentPlayer() == player1 && attacker == 'Computer'){
            throw new Error('Wrong Board')
        }
        else if(Player.getCurrentPlayer() == player2 && attacker == 'Player'){
            Player.changeCurrentPlayer(player2 , player1)
            throw new Error('Wrong Board')
        }
        if(attacker == 'Player'){
            try{
                
                let result = enemyBoard.receiveAttack([row,column])
                let isSunken = enemyBoard.didAllSink()
                Player.changeCurrentPlayer(player2 , player1)
                
                return [result,isSunken]
                
            }
            catch(err){
                
                throw err
            }
        }
        

    }
    const getPlayer1  = () => player1
    const getPlayer2 = () => player2
    const AIMove = () =>{
        while(true){
            try{
               let yCoord = Math.floor(Math.random()*10)
               let xCoord = Math.floor(Math.random()*10)
                let result = playerBoard.receiveAttack([xCoord,yCoord])
                let isSunken = playerBoard.didAllSink()
               
                Player.changeCurrentPlayer(player2 , player1)
                return [xCoord,yCoord,result,isSunken]
            }catch{
                

            }
        }
        
    }
    return {startGame,getPlayerBoard,getEnemyBoard,playRound,AIMove,getPlayer1,getPlayer2}
})()

module.exports = game
