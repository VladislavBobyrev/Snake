const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')

let reset = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight 
    //main()   
}
reset()
addEventListener('resize', reset)

async function main() {

   const image = await loadImage('./src/zeml.jpg')   
   const patern = ctx.createPattern(image, 'repeat')
   ctx.fillStyle = patern
   ctx.fillRect(0, 0, cnv.width, cnv.height)      
   
   



}

function loadImage(src){
    return new Promise((resolve) => {
        const image = new Image()
        image.src = src
        image.onload = () => resolve(image)
    })
}
