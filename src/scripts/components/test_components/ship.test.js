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