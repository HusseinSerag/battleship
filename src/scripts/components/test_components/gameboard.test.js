
const Ship = require('./../ship.js')
const gameBoard = require('./../gameboard.js');




describe('Test placement of ship',()=>{
    let ship;
    let gameBoardObject
    beforeEach((
    )=>{
        ship = Ship.createShip(4,0,false)
        gameBoardObject = gameBoard.createGameBoard()
        gameBoardObject.initalizeBoard()
    })
    afterEach(()=>{
        gameBoardObject.clearBoard()
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

        
    expect(gameBoardObject.placeShip(ship,true,0,0)).toEqual(finalArr)
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

        
    expect(gameBoardObject.placeShip(ship,true,7,4)).toEqual(finalArr)
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

        
        
    expect(gameBoardObject.placeShip(ship,false,0,0)).toEqual(finalArr)
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

        
        
    expect(gameBoardObject.placeShip(ship,false,5,4)).toEqual(finalArr)
})

test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoardObject.placeShip(ship,true,7,7)).toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoardObject.placeShip(ship,true,0,0)).not.toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoardObject.placeShip(ship,false,3,3)).not.toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoardObject.placeShip(ship,false,9,7)).toThrow(Error)
})
})



describe('Test Placement of 2 Ships',()=>{
    let ship1;
    let ship2;
    let gameBoardObject
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(6,0,false)
        gameBoardObject = gameBoard.createGameBoard()
        gameBoardObject.initalizeBoard()
    })
    afterEach(()=>{
        gameBoardObject.clearBoard()
    })
    test('Test Placement of non overlapping ships',()=>{
        let finalArr = [
            [ship1,ship1,ship1,ship1,0,0,0,0,0,0],
            [ship2,ship2,ship2,ship2,ship2,ship2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            ]
            gameBoardObject.placeShip(ship1,true,0,0)
            expect(gameBoardObject.placeShip(ship2,true,1,0)).toEqual(finalArr)
    })
    test('Test Placement of non overlapping ships',()=>{
        let finalArr = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,ship1,ship1,ship1,ship1,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,ship2,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            ]
            gameBoardObject.placeShip(ship1,true,2,2)
            expect(gameBoardObject.placeShip(ship2,false,3,4)).toEqual(finalArr)
    })

    test('Placement of overlapping ships',()=>{
        let finalArr = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,ship1,ship1,ship1,ship1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            ]
            expect(gameBoardObject.placeShip(ship1,true,2,2)).toEqual(finalArr)
            expect(()=>gameBoardObject.placeShip(ship2,false,2,4)).toThrow(Error)
    })
    test('Placement of overlapping ships',()=>{
        let finalArr = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,ship2,ship2,ship2,ship2,ship2,ship2,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            ]
            expect(gameBoardObject.placeShip(ship2,true,2,2)).toEqual(finalArr)
            expect(()=>gameBoardObject.placeShip(ship1,true,2,2)).toThrow(Error)
            
    })
})


describe('Receive Attack functionality',()=>{
    let ship1;
    let ship2;
    let gameBoardObject;
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(6,0,false)
        gameBoardObject = gameBoard.createGameBoard()
        gameBoardObject.initalizeBoard()
        gameBoardObject.placeShip(ship1,true,2,2)
        gameBoardObject.placeShip(ship2,false,3,4)
    })
    afterEach(()=>{
        gameBoardObject.clearBoard()
    })
    test('gameBoardObject does receives hit',()=>{
        expect(gameBoardObject.receiveAttack([2,2])).toBe(true)
        expect(gameBoardObject.receiveAttack([4,4])).toBe(true)
        
    })
    test('gameBoardObject record All missed hits',()=>{
        expect(gameBoardObject.receiveAttack([2,2])).toBe(true)
        expect(gameBoardObject.receiveAttack([0,0])).toBe(false)
        expect(gameBoardObject.receiveAttack([0,1])).toBe(false)
        expect(gameBoardObject.getMissedHits()).toContainEqual([0,0])
        expect(gameBoardObject.getMissedHits()).toContainEqual([0,1])
        
        
    })
})

describe('gameBoardObject should Report if all ships sunk or not ',()=>{
    let ship1;
    let ship2;
    let gameBoardObject
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(3,0,false)
        gameBoardObject = gameBoard.createGameBoard()
        gameBoardObject.initalizeBoard()
        gameBoardObject.placeShip(ship1,true,2,2)
        gameBoardObject.placeShip(ship2,false,3,4)
    })
    afterEach(()=>{
        gameBoardObject.clearBoard()
    })
    test('No ships have sunken yet',()=>{
        expect(gameBoardObject.didAllSink()).toBe(false)
    })
    test('1 has sunken but the other didn\'t ',()=>{
        gameBoardObject.receiveAttack([2,2])
        gameBoardObject.receiveAttack([2,3])
        gameBoardObject.receiveAttack([2,4])
        gameBoardObject.receiveAttack([2,5])
        expect(ship1.isSunk()).toBe(true)
        expect(ship2.isSunk()).toBe(false)
        expect(gameBoardObject.didAllSink()).toBe(false)
    })
    test('All ships has sunken ',()=>{
        gameBoardObject.receiveAttack([2,2])
        gameBoardObject.receiveAttack([2,3])
        gameBoardObject.receiveAttack([2,4])
        gameBoardObject.receiveAttack([2,5])
        gameBoardObject.receiveAttack([3,4])
        gameBoardObject.receiveAttack([4,4])
        gameBoardObject.receiveAttack([5,4])
        expect(ship1.isSunk()).toBe(true)
        expect(ship2.isSunk()).toBe(true)
        expect(gameBoardObject.didAllSink()).toBe(true)
    })
})

describe(' can\'t hit in the same place twice',()=>{
    let ship1;
    let ship2;
    let gameBoardObject
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(3,0,false)
        gameBoardObject = gameBoard.createGameBoard()
        gameBoardObject.initalizeBoard()
        gameBoardObject.placeShip(ship1,true,2,2)
        gameBoardObject.placeShip(ship2,false,3,4)
    })
    afterEach(()=>{
        gameBoardObject.clearBoard()
    })
    test('Duplicate hit return error',()=>{
        expect(gameBoardObject.receiveAttack([2,2])).toBe(true)
        expect(()=>gameBoardObject.receiveAttack([2,2])).toThrow(Error)
        expect(()=>gameBoardObject.receiveAttack([2,2])).toThrow(Error)
        expect(gameBoardObject.receiveAttack([2,3])).toBe(true)
    })
})

