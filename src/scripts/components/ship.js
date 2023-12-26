const Ship = (function(){
    const createShip = (length,numberOfHits, isSunk) =>{
        let shipLength = length
        let shipNumberOfHits = numberOfHits
        let shipIsSunk = isSunk
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
        return {getLength , setLength , getNumberOfHits , setNumberOfHits , getIsSunk , setIsSunk , hit}
    }
    return {createShip}
})()
module.exports = Ship