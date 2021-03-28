const score = {
  score: '',
  init(game) {
    this.game = game
    this.canvasElt = document.querySelector('canvas')
    //
    this.score = `Score: ${this.game.point}`
    this.headingElt = document.createElement('h2')
    this.headingElt.textContent = this.score
    //
    console.log(this.canvasElt)
    this.canvasElt.insertAdjacentElement('beforebegin', this.headingElt)
  },
  addPoint() {
    this.game.point += 1
    console.log(this.game.point)
    score.update()
  },
  update() {
    this.score = `Score: ${this.game.point}`
    this.headingElt.textContent = this.score
  },
}
export default score
