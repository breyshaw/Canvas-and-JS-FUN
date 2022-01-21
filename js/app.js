const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

//Need the canvas to fit the entire screen, can also be done in a stylesheet
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.5

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      //y velocity pushes the player down
      y: 0
    }
    this.width = 30
    this.height = 30
  }
//This is the method that "draws" or creates the character on the canvas
  draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y
    //This function monitors the bottom of the player, and if the bottom of our player plus its velocity is less than the bottom of the canvas, gravity continues. But when bottom of the player + velocity is = canvas.height, it sets the players y velocity to 0.
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
    else this.velocity.y = 0
  }
}

const player = new Player()

player.draw()

//recursive animation loop
function animate() {
  requestAnimationFrame(animate)
  //this clears the cavas
  c.clearRect(0 , 0, canvas.width, canvas.height)
  player.update()
}

animate()