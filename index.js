const cnv = document.querySelector('canvas')
const ctx = cnv.getContext('2d')


let reset = () => {
    cnv.width = innerWidth
    cnv.height = innerHeight

   

    main()
    async function main() {
        const image = await loadImage('./src/zeml.jpg')
    //   ctx.drawImage(image, 0, 0, cnv.width, cnv.height)
       const patern = ctx.createPattern(image, 'repeat')
       ctx.fillStyle = patern
       ctx.fillRect(0, 0, cnv.width, cnv.height)
      
       
// headSnake
let drowSnake = (x, y, height, width, r) => {
   
        ctx.beginPath()
        ctx.moveTo(x + r, y)
        ctx.lineTo(x + width - r, y)
        ctx.arc(x + width , y +r, r, -Math.PI / 2, 0)
        ctx.lineTo(x + r + width , y + height)
        ctx.arc(x + width, y + height + r, r, 0, Math.PI / 2)
        ctx.lineTo(x + r, y + height + r * 2)
        ctx.arc(x + r, y + height +r, r, Math.PI / 2, Math.PI )
        ctx.lineTo(x, y + r)
        ctx.arc(x + r, y + r, r, Math.PI, Math.PI / - 2)
        ctx.fillStyle='rgba(240, 24, 153, 0.9)'
        ctx.fill()
    }
    drowSnake(100, 500, 50, 50, 10)

    // eat
    let dorwEat = () => {
    ctx.beginPath()
    ctx.arc(Math.random() * cnv.width, Math.random() * cnv.height, 20, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(245, 133, 5, 0.87)' 
    ctx.fill()
    }
    dorwEat()

}

    function loadImage(src){
        return new Promise((resolve) => {
            const image = new Image()
            image.src = src
            image.onload = () => resolve(image)
        })
    }
    
}

reset()
window.addEventListener('resize', reset)

//let go = 0
//Animation({

//    clear() {
//        ctx.clearRect(0, 0, cnv.width, cnv.height)
//    },

//    update(){
//        go += 1
//    },
//    render(){

//    },
//})