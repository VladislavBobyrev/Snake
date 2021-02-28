
let pozX = 500
let pozY = 300
let oneGlasX = pozX
let oneGlasY = pozY
let twoGlasX = pozX
let twoGlasY = pozY

function snake(){   
    
    ctx.beginPath()
    ctx.rect(
        pozX,
        pozY,
        50,
        50,   
        )
       
    ctx.fillStyle = 'rgba(191, 12, 77, .9)' 
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(19, 120, 77, .7 )'
    ctx.arc(oneGlasX, oneGlasY, 10, 0, Math.PI * 2)
    ctx.arc(twoGlasX + 50, twoGlasY, 10, 0, Math.PI * 2)
    ctx.fill()  
    going()        
}

addEventListener('keydown', going)