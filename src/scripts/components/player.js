const Player = (function(){
    const createPlayer = (type) =>{
      const attack = (row,column,missList) => 
      {
        if(missList.includes([row,column])){
            throw new Error()
        }
        else{
            return [row,column]
        }
      }
      const randAttack = (sizeOfBoard,missList) =>{
        return [Math.floor(Math.random()*sizeOfBoard),Math.floor(Math.random()*sizeOfBoard)]
      }
      if(type == 'AI')
        return Object.assign({},{randAttack})
      return Object.assign({},{attack})
    }
    return {createPlayer}
})()
module.exports = Player