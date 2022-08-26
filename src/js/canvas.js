// ------------------- VARIAVEIS GLOBAIS ---------------------------------------------------------------------------------------------------------
import  minor_platform from "../img/minor_platform.png"
import  background from "../img/background.png"
import  big_Platform from "../img/Big_Platform.png"
import  base_platform from "../img/Base_Platform.png"
import  mageStanding from "../img/mageStanding.png"
import standLeft from "../img/standLeft.png"
import walkingRight from "../img/walkingRight.png"
import walkingLeft from   "../img/walkingLeft.png"
const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d') //para renderização 2d ou 3d, por exemplo.Referencia do tipo de desenho associado ao canvas
canvas.width = 1024
canvas.height = 576
const gravity = 0.5

// --------------------------------------------- PLAYER CONSTRUTOR ---------------------------------------------------------------------------------
class Player {
    constructor(){
        this.speed = 1
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.jump = 0
        this.width = 120
        this.height = 150
        this.image = createImage(mageStanding)
        this.frames = 0
        this.sprites = {
          stand: {
            right:createImage(mageStanding),
            left: createImage(standLeft),
            cropRight: -65,
            frames: 75,
            width: 438,
            height:576
            
          },
          run: {
            right:createImage(walkingRight),
            left: createImage(walkingLeft),
            cropRight: -10,
            frames: 70,
            width: 438,
            height: 523
          }
        }
        this.currentSprite = this.sprites.stand.right
        this.cropY = this.sprites.stand.cropRight
        this.maxFrames = this.sprites.stand.frames
        this.cutHeight = this.sprites.stand.height
        this.cutWidth = this.sprites.stand.width
    }
    draw(){
      c.drawImage(this.currentSprite,
        this.cutWidth*this.frames,this.cropY,this.cutWidth,this.cutHeight,
         this.position.x, this.position.y,this.width,this.height)
    }
    update(){
        this.draw()
        this.frames++
        if(this.frames > this.maxFrames) 
        this.frames = 0
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y < canvas.height){
        this.velocity.y += gravity
        }
       
    }
}

// ----------------------------------------- CONSTRUTOR PLATAFORMAS -----------------------------------------------------------------------------------
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height


  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}


// -------------------------------------------------------- DESENHAR PLATAFORMAS --------------------------------------------------------------
function createImage (imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}



// ------------------------------------------------ CONSTRUTOR CENARIO ---------------------------------------------------------------------
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }
    this.image = image
    this.width = image.width
    this.height = image.height


  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)

  }
}
// -------------------------------------------- VARIAVEIS GLOBAIS ---------------------------------------------------------------------------------
let genericObjects = [new GenericObject({x:0,y:0,image:createImage(background)})]
const  keys = {
  right:  {
      pressed: false
  },
  left:  {
      pressed: false
  }
}


// --------------------------------------- COORDENADAS CARTESIANAS DAS PLATAFORMAS -----------------------------------------------------------------
let bases = [new Platform({x:-3,y:540,image:createImage(big_Platform)}),
  new Platform({x:1500 ,y:450,image:createImage(minor_platform)}),
  new Platform({x:1900 ,y:420,image:createImage(base_platform)}),
  new Platform({x:3000,y:300,image:createImage(minor_platform)}),
  new Platform({x:3800,y:450,image:createImage(base_platform)}),
  new Platform({x:5000,y:500,image:createImage(big_Platform)}),
  new Platform({x:6500,y:450,image:createImage(minor_platform)}),
  new Platform({x:7000,y:400,image:createImage(minor_platform)}),
  new Platform({x:7500,y:350,image:createImage(minor_platform)}),
  new Platform({x:8000,y:300,image:createImage(minor_platform)}),
  new Platform({x:8700 ,y:480,image:createImage(base_platform)}),
  new Platform({x:10000,y:430,image:createImage(big_Platform)}),
  new Platform({x:11550,y:320,image:createImage(base_platform)}),
  new Platform({x:12800,y:250,image:createImage(minor_platform)}),
  new Platform({x:13300,y:250,image:createImage(minor_platform)}),
  new Platform({x:13800,y:250,image:createImage(minor_platform)}),
  new Platform({x:14500,y:250,image:createImage(minor_platform)}),
  new Platform({x:15000,y:120,image:createImage(base_platform)}),
  new Platform({x:16000,y:300,image:createImage(minor_platform)}),
  new Platform({x:16900,y:250,image:createImage(base_platform)}),
  new Platform({x:18100,y:365,image:createImage(big_Platform)}),
  new Platform({x:20000,y:520,image:createImage(big_Platform)})] 
let person = new Player()
let scrollOffset = 0




// ---------------------------------------------------------- RESPAWN PERSONAGEM --------------------------------------------------------------------
function init (){
  genericObjects = [new GenericObject({x:0,y:0,image:createImage(background)})]
  bases = [new Platform({x:-3,y:540,image:createImage(big_Platform)}),
    new Platform({x:1500 ,y:450,image:createImage(minor_platform)}),
    new Platform({x:1900 ,y:420,image:createImage(base_platform)}),
    new Platform({x:3000,y:300,image:createImage(minor_platform)}),
    new Platform({x:3800,y:450,image:createImage(base_platform)}),
    new Platform({x:5000,y:500,image:createImage(big_Platform)}),
    new Platform({x:6500,y:450,image:createImage(minor_platform)}),
    new Platform({x:7000,y:400,image:createImage(minor_platform)}),
    new Platform({x:7500,y:350,image:createImage(minor_platform)}),
    new Platform({x:8000,y:300,image:createImage(minor_platform)}),
    new Platform({x:8700 ,y:480,image:createImage(base_platform)}),
    new Platform({x:10000,y:430,image:createImage(big_Platform)}),
    new Platform({x:11550,y:320,image:createImage(base_platform)}),
    new Platform({x:12800,y:250,image:createImage(minor_platform)}),
    new Platform({x:13300,y:250,image:createImage(minor_platform)}),
    new Platform({x:13800,y:250,image:createImage(minor_platform)}),
    new Platform({x:14500,y:250,image:createImage(minor_platform)}),
    new Platform({x:15000,y:120,image:createImage(base_platform)}),
    new Platform({x:16000,y:300,image:createImage(minor_platform)}),
    new Platform({x:16900,y:250,image:createImage(base_platform)}),
    new Platform({x:18100,y:365,image:createImage(big_Platform)}),
    new Platform({x:20000,y:520,image:createImage(big_Platform)})] 
  person = new Player()
  scrollOffset = 0
 }



 
animate()



// ------------------------------------------ UPDATE MOVIMENTAÇÃO E COMPARATIVOS -----------------------------------------------------------------------

function animate () {
    genericObjects.forEach((GenericObject)=>{
      GenericObject.draw()
    })
    bases.forEach((base) => {base.draw()})
    person.update()
    requestAnimationFrame(animate) //faz com que função tenha uma atualização constante, sem depender de que o navegador atualize.Geralmente a taxa é de 60fps  
    if(keys.right.pressed && person.position.x < 450 && scrollOffset < 10150){
        person.velocity.x = person.speed*0.30
    } else if (keys.left.pressed && person.position.x > 100 ){
        person.velocity.x = -person.speed
    } else {person.velocity.x = 0}
    if (keys.right.pressed && scrollOffset < 10150){
        scrollOffset += 5
        bases.forEach((base) => {base.position.x -= 10})
    } else if (keys.left.pressed && scrollOffset > 0){
        scrollOffset -= 5
        bases.forEach((base) => {base.position.x += 10})
        
    }
    
    

    //Detectar colisão com a base
    bases.forEach((base) => {
        if(person.position.y + person.height <= base.position.y && person.position.y + person.height + person.velocity.y >= base.position.y
            &&  person.position.x + person.width >= base.position.x && person.position.x <= base.position.x + base.width){
        person.velocity.y = 0
        person.jump = 0
        }
    })
    if (person.position.y > canvas.height){
      init()
    }
}


// ---------------------------------------------------------- MOVIMENTOS ---------------------------------------------------------------------------------------------

addEventListener("keydown", ({keyCode})=>{ //O "keyCode é referente ao código da tecla pressionada que acionou o eventListener." 
  switch (keyCode) {
    case 65:
    case 37:
      keys.left.pressed = true
      person.currentSprite = person.sprites.run.left
      person.cropY = person.sprites.run.cropRight
      person.maxFrames = person.sprites.run.frames
      person.cutHeight = person.sprites.run.height
      person.cutWidth = person.sprites.run.width
      break
    case 68:
    case 39:
      keys.right.pressed = true
      person.currentSprite = person.sprites.run.right
      person.cropY = person.sprites.run.cropRight
      person.maxFrames = person.sprites.run.frames
      person.cutHeight = person.sprites.run.height
      person.cutWidth = person.sprites.run.width
      break
  }
})



addEventListener("keyup",({keyCode})=>{ // O "keyCode é referente ao código da tecla pressionada que acionou o eventListener." 
  switch (keyCode) {
    case 87:
    case 38:
    case 32:
          if(person.jump < 2 ){
            person.velocity.y -= 13
            person.jump += 1
          }
      break
    case 65:
    case 37:
      keys.left.pressed = false
      person.currentSprite = person.sprites.stand.left
      person.cropY = person.sprites.stand.cropRight
      person.maxFrames = person.sprites.stand.frames
      person.cutHeight = person.sprites.stand.height
      person.cutWidth = person.sprites.stand.width
      break
    case 83:
    case 40:
      person.velocity.y += 10
      break
    case 68:
    case 39:
      keys.right.pressed = false
      person.currentSprite = person.sprites.stand.right
      person.cropY = person.sprites.stand.cropRight
      person.maxFrames = person.sprites.stand.frames
      person.cutHeight = person.sprites.stand.height
      person.cutWidth = person.sprites.stand.width
      break
  }

})
// --------------------------------------------------------------------------------------------------------------------------------------------------------