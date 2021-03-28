const gamecontroller = {
  init(game) {
    window.addEventListener('keydown', e => {
      if (e.key === 'j') {
        if (!game.hasStarted) {
          game.hasStarted = true
        }
      }
    })
  },
}
export default gamecontroller
