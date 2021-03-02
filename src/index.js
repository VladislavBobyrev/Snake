const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')
const pixel = 40                                                      // размер шага и ячеек 
let echeikiX = Math.floor(innerWidth / pixel)                        // все ячейки по х
let echeikiY =  Math.floor(innerHeight / pixel)                      // все ячейки по у
let keyName                                                          // name keydown
let speed = 100
let tral
let tralX
let tralY 
console.log( echeikiX)

let resize = () => {
    cnv.width = innerWidth 
    cnv.height = innerHeight 
}
resize()
addEventListener('resize', resize)

const promisImg = new Promise((resolve) => {
        const img = new Image
        img.src = './src/stars.gif'
        img.onload = () => resolve(img)
    })
const image = promisImg.then((data) => data)

async function drowGame() { 
    requestAnimationFrame(drowGame)   
    const img = await image 
    const patern = ctx.createPattern(img, 'repeat')
    ctx.fillStyle = patern
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    drowStar()
    drowSnacke()
}
requestAnimationFrame(drowGame)
// stars  
const star = [{sx: 1, sy: 1,},]    
let starX = star[0].sx
let starY = star[0].sy

let drowStar = () => {
    ctx.beginPath()
    ctx.arc(
        starX * pixel + (pixel / 2),
        starY * pixel + (pixel / 2),
        pixel / 2,
        0,   
        Math.PI * 2,   
        )       
    ctx.fillStyle = 'rgba(11, 102, 77, .7)' 
    ctx.fill() 
}

let move = (event) => {
    if(event.key == 'ArrowUp'  && keyName !== 'ArrowDown'){
        keyName = 'ArrowUp'
    } else if (event.key == 'ArrowDown'  && keyName !== 'ArrowUp') {
        keyName = 'ArrowDown'
    } else if (event.key == 'ArrowLeft' && keyName !== 'ArrowRight') {
        keyName = 'ArrowLeft'
    } else if (event.key == 'ArrowRight' && keyName !== 'ArrowLeft') {
        keyName = 'ArrowRight'
    }
}
addEventListener('keydown', move)

const snake = []
    snake[0] = {
        x: 2, 
        y: 1, 
}

let drowSnacke = () => {

    let snakX = snake[0].x
    let snakY = snake[0].y

for(let i = 0; i < snake.length; i++){    
    ctx.beginPath()
    ctx.rect(
        snake[i].x * pixel,
        snake[i].y * pixel,
        pixel,
        pixel,
    )
    i > 1 && i < 8 ? ctx.fillStyle = 'rgba(310, 150, 77, .5)':
    i >= 8 && i < 16 ? ctx.fillStyle ='rgba(31, 243, 7, .3)'  :    
    i >= 17 && i <= 25 ? ctx.fillStyle =  'rgba(11, 102, 77, .3)':
    i < 32 ? ctx.fillStyle = 'rgba(119, 12, 77, .7)' : 
    ctx.fillStyle = 'rgba(170, 10, 302, .6)'    
    ctx.fill() 
    
}

     if(snakX > echeikiX )   snakX = 0
     if(snakX < 0 )   snakX = echeikiX 
     if(snakY > echeikiY)   snakY = 0
     if(snakY < 0 )   snakY =  echeikiY  


    if(snakX == starX && snakY == starY){
        starX = Math.floor( Math.random() * echeikiX)
        starY = Math.floor( Math.random() * echeikiY)
    } else {
    snake.pop()
    }
   
    if(keyName === 'ArrowUp'){
        snakY -=1
    } else if(keyName == 'ArrowDown'){
        snakY +=1
    } else if(keyName == 'ArrowLeft'){
        snakX -=1
    } else if(keyName == 'ArrowRight'){
        snakX +=1
    }
    tral = {
        x: snakX,
        y: snakY,
    }
    snake.unshift(tral)
}