
const Ship = require('./../ship.js')
const gameBoard = require('./../gameboard.js')



describe('Test placement of ship',()=>{
    let ship;
    
    beforeEach((
    )=>{
        ship = Ship.createShip(4,0,false)
        gameBoard.initalizeBoard()
    })
    afterEach(()=>{
        gameBoard.clearBoard()
    })
   
    
test('Ship can be placed horizontally',()=>{
    let finalArr = [
        [ship,ship,ship,ship,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        ]

        
    expect(gameBoard.placeShip(ship,true,0,0)).toEqual(finalArr)
})
test('Ship can be placed horizontally',()=>{
    let finalArr = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,ship,ship,ship,ship,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        ]

        
    expect(gameBoard.placeShip(ship,true,7,4)).toEqual(finalArr)
})
test('Ship can be places vertically',()=>{
    let finalArr = [
        [ship,0,0,0,0,0,0,0,0,0],
        [ship,0,0,0,0,0,0,0,0,0],
        [ship,0,0,0,0,0,0,0,0,0],
        [ship,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        ]

        
        
    expect(gameBoard.placeShip(ship,false,0,0)).toEqual(finalArr)
})
test('Ship can be places vertically',()=>{
    let finalArr = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,ship,0,0,0,0,0],
        [0,0,0,0,ship,0,0,0,0,0],
        [0,0,0,0,ship,0,0,0,0,0],
        [0,0,0,0,ship,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        ]

        
        
    expect(gameBoard.placeShip(ship,false,5,4)).toEqual(finalArr)
})
})