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
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    //This function monitors the bottom of the player, and if the bottom of our player plus its velocity is less than the bottom of the canvas, gravity continues. But when bottom of the player + velocity is = canvas.height, it sets the players y velocity to 0.
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity
    else this.velocity.y = 0
  }
}

class Platform {
  constructor(){
    this.position = {
      x: 0,
      y: 0,
    }
    this.width = 200
    this.height = 20
  }
  draw() {
    c.fillStyle = 'green'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const player = new Player()
const platform = new Platform()
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}
player.draw()

//recursive animation loop
function animate() {
  requestAnimationFrame(animate)
  //this clears the canvas
  c.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
  platform.draw()


  if (keys.right.pressed) {
    player.velocity.x = 5
  } else if (keys.left.pressed) {
    player.velocity.x = -5
  } else player.velocity.x = 0
}

animate()

//Here's a good way to find the key code
// addEventListener('keydown', ({keyCode}) => {
//   console.log(keyCode)
// })

// This is a good example of how the even listener works
// addEventListener('keydown', ({keyCode}) => {
//   console.log(keyCode)
//   switch (keyCode) {
//     case 65:
//       console.log('left')
//       break
//   }
// })


addEventListener('keydown', ({ keyCode }) => {
  console.log(keyCode)
  switch (keyCode) {
    case 65:
      keys.left.pressed = true
      break
    case 83:
      console.log('down')
      break
    case 68:
      keys.right.pressed = true
      break
    case 87:
      player.velocity.y -= 20
      break
  }
  console.log(keys.right.pressed)
})

addEventListener('keyup', ({ keyCode }) => {
  console.log(keyCode)
  switch (keyCode) {
    case 65:
      keys.left.pressed = false
      break
    case 83:
      console.log('down')
      break
    case 68:
      keys.right.pressed = false
      break
    case 87:
      player.velocity.y -= 20
      break
  }
  console.log(keys.right.pressed)
})