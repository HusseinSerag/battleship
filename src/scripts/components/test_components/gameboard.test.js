
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

test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoard.placeShip(ship,true,7,7)).toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoard.placeShip(ship,true,0,0)).not.toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoard.placeShip(ship,false,3,3)).not.toThrow(Error)
})
test('Ship can\'t be placed out of bound',()=>{    
    expect(() => gameBoard.placeShip(ship,false,9,7)).toThrow(Error)
})
})



describe('Test Placement of 2 Ships',()=>{
    let ship1;
    let ship2;
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(6,0,false)
        gameBoard.initalizeBoard()
    })
    afterEach(()=>{
        gameBoard.clearBoard()
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
            gameBoard.placeShip(ship1,true,0,0)
            expect(gameBoard.placeShip(ship2,true,1,0)).toEqual(finalArr)
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
            gameBoard.placeShip(ship1,true,2,2)
            expect(gameBoard.placeShip(ship2,false,3,4)).toEqual(finalArr)
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
            expect(gameBoard.placeShip(ship1,true,2,2)).toEqual(finalArr)
            expect(()=>gameBoard.placeShip(ship2,false,2,4)).toThrow(Error)
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
            expect(gameBoard.placeShip(ship2,true,2,2)).toEqual(finalArr)
            expect(()=>gameBoard.placeShip(ship1,true,2,2)).toThrow(Error)
            
    })
})


describe('Receive Attack functionality',()=>{
    let ship1;
    let ship2;
    beforeEach((
    )=>{
        ship1 = Ship.createShip(4,0,false)
        ship2 = Ship.createShip(6,0,false)
        gameBoard.initalizeBoard()
        gameBoard.placeShip(ship1,true,2,2)
        gameBoard.placeShip(ship2,false,3,4)
    })
    afterEach(()=>{
        gameBoard.clearBoard()
    })
    test('Gameboard does receives hit',()=>{
        expect(gameBoard.receiveAttack([2,2])).toBe(true)
        expect(gameBoard.receiveAttack([4,4])).toBe(true)
        
    })
    test('Gameboard record All missed hits',()=>{
        expect(gameBoard.receiveAttack([2,2])).toBe(true)
        expect(gameBoard.receiveAttack([0,0])).toBe(false)
        expect(gameBoard.receiveAttack([0,1])).toBe(false)
        expect(gameBoard.getMissedHits()).toContainEqual([0,0])
        expect(gameBoard.getMissedHits()).toContainEqual([0,1])
        
    })
})


