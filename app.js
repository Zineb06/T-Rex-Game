document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')


function control(key){
    if(key.keyCode === 32){ // if you press the space key then jump
       jump()

    }
}
document.addEventListener('keyup',control)

function jump(){
    let position = 0
    let time = setInterval(function(){

        //jump up : 
        console.log('up')
        position += 10
        dino.style.bottom = position + 'px'

        //go back down  : 
        if(position === 200){
            clearInterval(time)
            console.log('down')
            let downTime = setInterval(function(){
                if(position === 0 ){
                    clearInterval(downTime)
                }
                position -= 10
                dino.style.bottom = position +'px'
            },20)
        }

    },20)
}

})