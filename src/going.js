let going = (event) => {   

    if(event.key === 'ArrowUp'){ // стрелочка вверх 
        // то первый и второй глаз повернуться вверх
        pozY -=10
        oneGlasX = pozX
        oneGlasY = pozY
        twoGlasX = pozX 
        twoGlasY = pozY
    }
    if(event.key === 'ArrowDown'){ // стрелочка вниз
      // то первый и второй глаз повернуться вниз
      pozY +=10
      oneGlasX = pozX 
      oneGlasY = pozY + 50
      twoGlasX = pozX 
      twoGlasY = pozY + 50
    }
    if(event.key === 'ArrowLeft'){ // стрелочка влево
    // то первый и второй глаз повернуться влево
      pozX -=10
      oneGlasX = pozX 
      oneGlasY = pozY + 50
      twoGlasX = pozX -50
      twoGlasY = pozY 
    }
    if(event.key === 'ArrowRight'){ // стрелочка вправо
    // то первый и второй глаз повернуться вправо
      pozX +=10
      oneGlasX = pozX + 50
      oneGlasY = pozY 
      twoGlasX = pozX
      twoGlasY = pozY +50
      
    }
    //если змейка вышла за левый край то она появляется справа
    if(pozX < -50){
       pozX = cnv.width 
    }
     //если змейка вышла за левый край то она появляется справа
    if(pozX >  cnv.width){
        pozX = 0 
    }
     //если змейка вышла за верх край то она появляется справа
     if(pozY < -50){
        pozY = cnv.height
     }
     //если змейка вышла за нижний край то она появляется справа
     if(pozY > cnv.height){
        pozY = 0
     }
}