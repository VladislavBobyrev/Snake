// eat
// стартовое положение
let xEat = 400
let yEat = 300


let dorwEat = (xEat, yEat) => {
    
    ctx.beginPath()
    //ctx.arc(Math.random() * cnv.width, Math.random() * cnv.height, 20, 0, Math.PI * 2)
    ctx.arc(xEat, yEat, 30, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(245, 133, 5, 0.87)' 
    ctx.fill()
}

let randomEat = () => {
    xEat = Math.random() * cnv.width
    yEat = Math.random() * cnv.height
   return xEat,  yEat
}