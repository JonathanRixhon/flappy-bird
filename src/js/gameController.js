import birdie from './birdie'

const gamecontroller = {
  init(game) {
    window.addEventListener('keydown', e => {
      if (e.key === 'j') {
        if (!game.hasStarted) {
          game.hasStarted = true
        }
        birdie.goUp()
        //faire monter l'oiseau. (petit coup de pied au derrière de l'oiseau)
      }
    })
  },
}
export default gamecontroller
