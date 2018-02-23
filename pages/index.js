import Player from './player.js'
import Playermodel from './playermodel.js'
import Enemy from './enemymodel.js'
import Settings from '.settings.js'
import data from './data.js'

class Index extends React.Component {
  render() {

    //create enemies via random (10 enemies)
    const enemies = []
    let counter = 0

    while (counter < 10) {
      enemies.push({
        left: Math.floor((Math.random() * (data.field[0]-data.modelSize[1])) + 1),
        top: Math.floor((Math.random() * (data.field[1]-data.modelSize[1])) + 1)
      })

      counter++
    }

    return (
      <div>
      <Player/>

        <main>
          <Playermodel/>
          {enemies.map(info => <Enemy position={info}/>)}

          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

            body {
              font-family: 'Press Start 2P', cursive;
            }

            main {
               border: solid black 2px;
               width: ${data.field[0]}px;
               height:${data.field[1]}px;
               position: relative;
            }
       `}</style>
        </main>
      </div>
    )
  }
}

export default Index
