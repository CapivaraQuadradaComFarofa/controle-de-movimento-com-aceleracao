// mova usando WASD

function setup() {
    // ajustando o canvas ao tamanho da janela
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
    background(220);
    fill(200,0,0)
    rect(posX,posY,20,20) // criando quadrado
    mover()
    colisao()
  }
  
  // posições X e Y
  var posX = 200
  var posY = 200
  // aceleração X e Y
  var andarX = 0
  var andarY = 0
  // padrão de velocidade
  var pad = 1
  // velocidade
  var velo = pad
  
  function mover(){
    // adicionando as acelerações às respectivas posições
    posX += andarX
    posY += andarY
    
    // criando um limite de velocidade às acelerações
    if(andarY > 10){
      andarY = 10
    } else if(andarY < -10){
      andarY = -10
    }
    if(andarX > 10){
      andarX = 10
    } else if(andarX < -10){
      andarX = -10
    } 
    
    // diminuindo a velocidade nas diagonais (senão o quadrado anda mais rapido se andar na diagonal)
    if((keyIsDown(83)&&keyIsDown(68))||                  
       (keyIsDown(83)&&keyIsDown(65)) ||
       (keyIsDown(87)&&keyIsDown(68))  ||
       (keyIsDown(87)&&keyIsDown(65))
      ){
      velo = pad/2
    }else{
      velo = pad
    }
    
    // ajustando a aceleração Y pressionando [S] ou [W]
    if(keyIsDown(83)){// S
      andarY += velo
    } else if(keyIsDown(87)){// W
      andarY -= velo
    } else {
      // ajustando a aceleração Y para 0 quando [S] ou [W] não estão sendo pressionados
      if(andarY > 0){
        andarY -= velo
      } else if(andarY < 0){
        andarY += velo
      }
    }
    
    // ajustando a aceleração X pressionando [D] ou [A]
    if(keyIsDown(68)){// D
      andarX += velo
    } else if(keyIsDown(65)){// A
      andarX -= velo
    } else {
      // ajustando a aceleração X para 0 quando [D] ou [A] não estão sendo pressionados
      if(andarX > 0){
        andarX -= velo
      } else if(andarX < 0){
        andarX += velo
      }
    }
    
  }
  
  function colisao(){
    // colisão com os lados esquerdo e direito
    if(posX < 0){
      posX = 0
      andarX = 0
    }else if(posX > width - 10){
      posX = width - 10
      andarX = 0
    } 
    
    // colisão com a parte de cima e de baixo
    if(posY < 0){
      posY = 0
      andarY = 0
    }else if(posY > height - 10){
      posY = height - 10
      andarY = 0
    }
  }
