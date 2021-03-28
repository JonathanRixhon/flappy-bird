import ground from './ground'
import gamecontroller from './gamecontroller'
const birdie = {
  game: null,
  animationStep: 0,
  maxAnimationStep: 0,
  counterInterval: 0,
  maxInterval: 5,
  frames: [
    { sx: 6, sy: 982 },
    { sx: 62, sy: 982 },
    { sx: 118, sy: 982 },
  ],
  width: 34,
  height: 24,
  x: 2,
  y: 0,
  fallSpeed: 0,
  maxFallSpeed: 7,

  init(game) {
    //init des valeurs
    this.game = game
    this.x = this.width / 2 + 3
    this.y = (this.game.canvas.height - ground.frame.sh) / 2
    this.maxAnimationStep = this.frames.length - 1
  },

  update() {
    if (this.game.hasStarted) {
      //gestion de la chute
      if (this.fallSpeed < this.maxFallSpeed)
        this.fallSpeed += this.game.gravity
      this.y += this.fallSpeed
    }
    //bordercollision
    this.checkCollisionWithGround()
    //rendu
    this.render()
  },

  render() {
    //flap wings normaly
    this.counterInterval++
    if (!(this.counterInterval % this.maxInterval)) {
      this.counterInterval = 0
      this.animationStep =
        this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0
    }
    //render
    this.game.context.save()
    this.game.context.translate(this.x, this.y)
    this.game.context.rotate(this.fallSpeed / this.maxFallSpeed)
    this.game.renderSpriteFrame({
      sx: this.frames[this.animationStep].sx,
      sy: this.frames[this.animationStep].sy,
      sw: this.width,
      sh: this.height,
      dx: 0 - this.width / 2 + 3,
      dy: 0 - this.height / 2,
      dw: this.width,
      dh: this.height,
    })
    this.game.context.restore()
  },
  checkCollisionWithGround() {
    if (this.y + this.height / 2 > ground.frame.dy) {
      this.y = ground.frame.dy - this.height / 2
      this.goUp()
    }
  },
  goUp() {
    this.fallSpeed = -this.maxFallSpeed
  },
}
export default birdie
