const ground = {
  game: null,
  speed: 3,
  maxOffset: 0,
  frame: {
    //dans l'image
    sx: 584,
    sy: 0,
    sw: 336,
    sh: 112,
    //dans le context
    dx: 0,
    dy: 0,
    dw: 336,
    dh: 112,
  },

  init(game) {
    //init des valeurs
    this.game = game
    //calcul du décalage
    this.maxOffset = this.frame.sw - game.canvas.width
    //positionnement du ground
    this.frame.dy = this.game.canvas.height - this.frame.sh
  },

  update() {
    if (this.frame.dx <= -this.maxOffset) {
      this.frame.dx = 0
    }
    this.frame.dx -= this.speed
    this.game.renderSpriteFrame(this.frame)
  },
}
export default ground
