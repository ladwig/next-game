import data from './data.js'

class Player extends React.Component {

  render() {
    return (
      <div>
        <div className = 'playerName'>{data.player[0]} </div>
        <div className = 'playerLife'>{data.player[1]} </div>
        <style jsx>{`
          .playerLife {
            text-algin: left;
            margin-right: 10px;
          }
       `}</style>
      </div>

    )
  }
}

export default Player
