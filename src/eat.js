
let dorwEat = () => {
    let  xEat = 10
    let  yEat = 10
// стартовое положение 
if(xEat === pozY) {
   xEat = Math.random() * cnv.width - 300
   yEat = Math.random() * cnv.height - 300  
}
     
    ctx.beginPath()
    ctx.arc(xEat + 300, yEat + 300, 30, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(245, 133, 5, 0.87)' 
    ctx.fill()
}   