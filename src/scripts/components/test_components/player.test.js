const Ship = require('./../ship.js')
const gameBoard = require('./../gameboard.js')
const Player = require('./../player.js')
const { afterEach } = require('node:test')
describe('AI and Normal players are created normally',()=>{
    test('AI and player is created',()=>{
        let AI = Player.createPlayer('AI')
        let player = Player.createPlayer()
        expect(AI).toHaveProperty('randAttack')
        expect(player).toHaveProperty('attack')
    })
})
describe('Player and AI can place their attacks correctly',()=>{
    let ship1;
    let ship2;
    let ship3;
    let ship4;
    let ship5;
    let ship6;
    let PlayerBoard
    let EnemyBoard
    let player1
    let AI
    beforeEach(()=>{
        ship1 = Ship.createShip(2,0,false)
        ship2 = Ship.createShip(3,0,false)
        ship3 = Ship.createShip(3,0,false)
        ship4 = Ship.createShip(2,0,false)
        ship5 = Ship.createShip(3,0,false)
        ship6 = Ship.createShip(4,0,false)
        PlayerBoard = gameBoard.createGameBoard()
        EnemyBoard = gameBoard.createGameBoard()
        PlayerBoard.initalizeBoard()
        EnemyBoard.initalizeBoard()
        PlayerBoard.placeShip(ship1,true,0,0)
        PlayerBoard.placeShip(ship2 , true ,1 ,0)
        PlayerBoard.placeShip(ship3,false,3,3)
        EnemyBoard.placeShip(ship4,true,0,0)
        EnemyBoard.placeShip(ship5 , true ,1 ,0)
        EnemyBoard.placeShip(ship6,false,3,3)
        player1 = Player.createPlayer()
        AI = Player.createPlayer('AI')
    })
    afterEach(()=>{
        PlayerBoard.clearBoard()
        EnemyBoard.clearBoard()
    })
    test('Player and AI can attack inbound ',()=>{
        let attack = player1.attack(0,0,EnemyBoard.getMissedHits())
        expect(EnemyBoard.receiveAttack([...attack])).toBe(true)
        
    })
    
})