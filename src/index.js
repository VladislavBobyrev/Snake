const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let reset = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight   
}
reset()

addEventListener('resize', reset)

// подключаю фон
async function main() {
   requestAnimationFrame(main)   
   const image = await loadImage('./src/stars.gif')   
   const patern = ctx.createPattern(image, 'repeat')
   ctx.fillStyle = patern
   
   ctx.fillRect(0, 0, cnv.width, cnv.height) 
   snake()
   
}

function loadImage(src){
    return new Promise((resolve) => {
        const image = new Image()
        image.src = src
        image.onload = () => resolve(image)
    })
    
}
requestAnimationFrame(main)
