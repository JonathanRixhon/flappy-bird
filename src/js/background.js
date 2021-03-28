const background = {
  game: null,
  frame: {
    //dans l'image
    sx: 0,
    sy: 0,
    sw: 0,
    sh: 0,
    //dans le context
    dx: 0,
    dy: 0,
    dw: 0,
    dh: 0,
  },

  init(game) {
    //init des valeurs
    this.game = game

    //définitiondes coordonnées dans l'image
    this.frame.sw = game.canvas.width
    this.frame.sh = game.canvas.height

    //définitiondes coordonnées dans le context
    this.frame.dw = game.canvas.width
    this.frame.dh = game.canvas.height
  },

  update() {
    this.game.renderSpriteFrame(this.frame)
  },
}
export default background
