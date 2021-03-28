import gamecontroller from './gamecontroller'
import background from './background'
import TubePair from './TubePair'
import ground from './ground'
import birdie from './birdie'
import score from './score'

const game = {
  canvas: document.getElementById('game'),
  context: null,
  spriteSheetSrc: './resources/sprite.png',
  sprite: new Image(),
  //world variables
  gravity: 0.9,
  //game status
  hasStarted: false,
  //tubes variables
  tubesPairs: [],
  maxTubesPairs: 3,
  frameCounter: 0,
  frameInterval: 80,
  requestId: 0,
  //
  point: 0,

  init() {
    this.context = this.canvas.getContext('2d')
    this.sprite.src = this.spriteSheetSrc

    //écoute de la fin du chargement de l'image
    this.sprite.addEventListener('load', () => {
      background.init(this)
      score.init(this)
      ground.init(this)
      birdie.init(this)
      gamecontroller.init(this)
      this.animate()
    })
  },
  restart() {
    this.tubesPairs = []
    this.hasStarted = false
    birdie.fallSpeed = 0
    this.point = 0
    //
    score.update()
    background.init(this)
    ground.init(this)
    birdie.init(this)
    gamecontroller.init(this)
    this.animate()
  },

  animate() {
    this.requestId = window.requestAnimationFrame(() => {
      this.animate()
    })
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //update de l'animation
    background.update()
    //ajout de tube à interval régulier
    if (this.hasStarted) {
      if (this.frameCounter++ > this.frameInterval) {
        if (this.tubesPairs.length > this.maxTubesPairs) {
          this.tubesPairs.splice(0, 1)
        }
        this.tubesPairs.push(new TubePair(this))
        this.frameCounter = 0
      }
      this.tubesPairs.forEach(tubepair => {
        tubepair.update()
      })
    }
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
  cancelAnimation() {
    window.cancelAnimationFrame(this.requestId)
  },
}

game.init()
