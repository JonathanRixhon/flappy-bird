import birdie from './birdie'

const gamecontroller = {
  init(game) {
    window.addEventListener('keydown', e => {
      if (e.key === ' ') {
        if (!game.hasStarted) {
          game.hasStarted = true
        }
        birdie.goUp()
        //faire monter l'oiseau. (petit coup de pied au derrière de l'oiseau)
      }
      if (e.key === 'r') {
        game.cancelAnimation()
        game.restart()
      }
    })
  },
}
export default gamecontroller
