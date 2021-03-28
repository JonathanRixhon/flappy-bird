import background from './background'
import ground from './ground'
import birdie from './birdie'
import gamecontroller from './gamecontroller'

const game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  gravity: 0.9,
  hasStarted: false,

  init() {
    this.context = this.canvas.getContext('2d')
    this.sprite.src = this.spriteSheetSrc

    //écoute de la fin du chargement de l'image
    this.sprite.addEventListener('load', () => {
      background.init(this)
      ground.init(this)
      birdie.init(this)
      gamecontroller.init()
      this.animate()
    })
  },

  animate() {
    window.requestAnimationFrame(() => {
      this.animate()
    })
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //update de l'animation
    background.update()
    ground.update()
    birdie.update()
  },

  renderSpriteFrame(coordinates) {
    this.context.drawImage(
      this.sprite,
      coordinates.sx,
      coordinates.sy,
      coordinates.sw,
      coordinates.sh,
      coordinates.dx,
      coordinates.dy,
      coordinates.dw,
      coordinates.dh
    )
  },
}

game.init()
