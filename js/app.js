const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

//Need the canvas to fit the entire screen, can also be done in a stylesheet
canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.width = 30
    this.height = 30
  }
//This is the method that "draws" or creates the character on the canvas
  draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const player = new Player()
//This basically invokes the player
player.draw()