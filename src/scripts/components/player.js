const Player = (function(){
  let currentPlayer;
  const setCurrentPlayer = (player) =>{
    currentPlayer = player
  }
  const getCurrentPlayer = () => currentPlayer

  const changeCurrentPlayer =(player,player2) =>{
    if(currentPlayer==player){
      currentPlayer = player2
    }
    else if(currentPlayer == player2){
      currentPlayer = player
    }
  }
    const createPlayer = (type,playerName) =>{
      const attack = (row,column) => 
      {
            return [row,column]
        
      }
      
     let playerUserName = playerName
      const randAttack = (sizeOfBoard) =>{
        
        let randomXcoordinate = Math.floor(Math.random()*sizeOfBoard)
        let randomYcoordinate = Math.floor(Math.random()*sizeOfBoard) 
        
        
        
        return [randomXcoordinate,randomYcoordinate]
      }

      
    if(type == 'AI')
    return Object.assign({},{randAttack,playerUserName})
      return Object.assign({},{attack,playerUserName})
    }
    
    return {createPlayer,setCurrentPlayer,getCurrentPlayer,changeCurrentPlayer}
})()
module.exports = Player