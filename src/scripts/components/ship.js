const Ship = (function(){
    const createShip = (length,numberOfHits, isShipSunk) =>{
        let shipLength = length
        let shipNumberOfHits = numberOfHits
        let shipIsSunk = isShipSunk
        const getLength = () => shipLength
        const setLength = (newLength) =>{
            shipLength = newLength
        }
        const getNumberOfHits = () => shipNumberOfHits
        const setNumberOfHits = (newNumberOfHits) =>{
            shipNumberOfHits = newNumberOfHits
        }
        const incrementNumberOfHits = () => 
            shipNumberOfHits++
        
        const getIsSunk = () => shipIsSunk
        const setIsSunk = (newIsSunk) => {
            shipIsSunk = newIsSunk
        } 
        const hit = () =>{
            incrementNumberOfHits(getNumberOfHits())
        }
        const isSunk = () =>{
            if(getNumberOfHits() == getLength())
            setIsSunk(true)
        return getIsSunk()
        }
        return {getLength , setLength , getNumberOfHits , setNumberOfHits , getIsSunk , setIsSunk , hit , isSunk}
    }
    return {createShip}
})()
module.exports = Ship