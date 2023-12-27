const Player = (function(){
  let currentPlayer;
  const setCurrentPlayer = (player) =>{
    currentPlayer = player
  }
  const getCurrentPlayer = () => currentPlayer
    const createPlayer = (type) =>{
      const attack = (row,column) => 
      {
            return [row,column]
        
      }
      
     
      const randAttack = (sizeOfBoard) =>{
        
        let randomXcoordinate = Math.floor(Math.random()*sizeOfBoard)
        let randomYcoordinate = Math.floor(Math.random()*sizeOfBoard) 
        
        
        
        return [randomXcoordinate,randomYcoordinate]
      }

      
    if(type == 'AI')
    return Object.assign({},{randAttack})
      return Object.assign({},{attack})
    }
    
    return {createPlayer,setCurrentPlayer,getCurrentPlayer}
})()
module.exports = Player