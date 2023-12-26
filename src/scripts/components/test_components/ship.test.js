const Ship = require('./../ship.js')
let ship
beforeEach(()=>{
    ship = Ship.createShip(4,0,false)
})
describe('Testing of the hit function',()=>{
    test('Test that hit increases number of hits',()=>{
        ship.hit()
        expect(ship.getNumberOfHits()).toBe(1)
    })
    test('Ship hit multiple times',()=>{
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.getNumberOfHits()).toBe(3)
    })
})

describe('Testing is Sunk',()=>{
    test('Test that ship doesn\'t sink if hits less than length',()=>{
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(false)
    })
    test('Test that ship sinks ',()=>{
        ship.hit()
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
})