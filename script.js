document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
const world = document.querySelector('.world')
const score = document.querySelector('.score')
const ground = document.querySelector('.ground')
const startScreen = document.getElementById('alert')

let isJumping=false
let delay=0.9
let position = 0
let scoreDisplay = 0
let gameOver = false
//let on = false

startScreen.innerHTML ='Click To Start'
ground.style.animation='none'

function startGame(){
   startScreen.innerHTML =''
   ground.style.animation = 'slideright 600s infinite linear'
   moveCactus()
}

function control(key){
    if(key.keyCode === 32){ // if press the space key then jump
        if(!isJumping){
            isJumping = true
            jump()
            scoreDisplay++
        score.textContent = scoreDisplay
        }
    }
}


function jump(){
    let counter = 0
    let time = setInterval(function(){

        //jump up : 
        position += 30
        counter++
        position=position*delay
        dino.style.bottom = position + 'px'
        // dino.style.background='red';
        //console.log(dino.style.bottom)

        //go back down  : 
        if(counter === 15){
            clearInterval(time)
            let downTime = setInterval(function(){
                position -= 5
                counter--
                position=position*delay
                dino.style.bottom = position +'px'
                if(counter === 0 ){
                    clearInterval(downTime)
                    isJumping=false
                    dino.style.bottom='4%'
                }
                
            },20)
        }
    },20)
}

//show the cactus obstacle :
function moveCactus(){
    let cactusPosition = 1000
    let randomTime = Math.random()*5000
    
    const cactus = document.createElement('div')
    if(!gameOver) cactus.classList.add('cactus')
    world.appendChild(cactus)
    cactus.style.left = cactusPosition + 'px'

    let time = setInterval(function(){
        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'
        if(cactusPosition > 0 && cactusPosition < 70 && position < 70){
            clearInterval(time)
            startScreen.style.color = 'gray'
            startScreen.innerHTML = 'You Lost !'
            gameOver = true
            cactus.classList.remove('cactus')
            // ground.style.animation='none'

            //if the game is over remove all the design : 
            ground.classList.remove('ground')
            dino.style.display='none'
        }
    },20)
    
    // repeat the appearance of the cactus if the game is not over : 
     if(!gameOver) setTimeout(moveCactus, randomTime)
     else popup() // popup if the game is over
}

function popup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

startScreen.addEventListener('click',startGame)
document.addEventListener('keyup',control)
// if(on) moveCactus()

})