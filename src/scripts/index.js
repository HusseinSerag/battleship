import * as startDOM from './ui-components/start.js'
document.body.appendChild(startDOM.renderStart())
let startBtn = document.querySelector('.start-button')
startBtn.addEventListener('click',()=>{
    document.body.appendChild(startDOM.renderPlaceShipsOnBoard())
})