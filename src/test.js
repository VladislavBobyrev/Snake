
requestAnimationFrame(up)

let pozX = 500
let pozY = 600
let going = 10



addEventListener('keydown', function(event) {
    if(event.key === 'ArrowUp'){ // стрелочка вверх 
      pozY += -going
    }
    if(event.key === 'ArrowDown'){ // стрелочка вниз
      pozY += going
    }
    if(event.key === 'ArrowLeft'){ // стрелочка влево
        pozX += -going
    }
    if(event.key === 'ArrowRight'){ // стрелочка вправо
        pozX += going
    }
    
})
function up(){
    requestAnimationFrame(up)
    
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    
    ctx.fillStyle = 'rgba(245, 133, 5, 0.87)' 
    dorwEat(xEat, yEat)
     if(pozX && pozY === xEat && yEat){
        randomEat()
    }    

    ctx.beginPath()
    ctx.rect(
        pozX,
        pozY,
        50,
        50,   
        )
    ctx.fillStyle = 'black' 
    ctx.fill()
   

}

