import data from './data.js'

class Playermodel extends React.Component {
  state = {
    left: 0,
    top: 0
  }

  onKeyDown = event => {
    const { top, left } = this.state

    console.log(event)

    switch (event.key) {
      case 'ArrowRight':
        this.moveBox('left', left, data.playerSpeed[0], 'plus')
        break
      case 'ArrowDown':
        this.moveBox('top', top, data.playerSpeed[0], 'plus')
        break
      case 'ArrowLeft':
        this.moveBox('left', left, data.playerSpeed[0], 'minus')
        break
      case 'ArrowUp':
        this.moveBox('top', top, data.playerSpeed[0], 'minus')
        break
      default:
        return
    }

    event.preventDefault()
  }

  moveBox = (position, value, more, kind) => {
    value = kind === 'minus' ? value - more : value + more
    const { top, left } = this.state

    let remaining = -1

    if (position === 'top' && value > (data.field[1] - data.modelSize[0])) {
      remaining = data.field[1] - (top + data.modelSize[0])
    }

    if (position === 'left' && value > (data.field[0]-data.modelSize[0])) {
      remaining = data.field[0] - (left + data.modelSize[0])
    }

    if (value < 0) {
      remaining = this.state[position]
    }

    if (remaining > 0) {
      value = kind === 'minus' ? this.state[position] - remaining : this.state[position] + remaining
    } else if (remaining === 0) {
      return
    }

    const newState = {}
    newState[position] = value

    this.setState(newState)
  }

  componentWillMount() {
    if (!global.window) {
      return
    }

    document.body.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount() {
    if (!global.window) {
      return
    }

    document.body.removeEventListener('keydown', this.onKeyDown)
  }

  render() {
    const { top, left } = this.state

    return (
      <div>
      <main/>

        <style jsx>{`
          main {
            width: ${data.modelSize[0]}px;
            height: ${data.modelSize[0]}px;
            background: black;
            top: ${top}px;
            left: ${left}px;
            box-sizing: border-box;
            border: 3px solid red;
            position: absolute;
            transition: 300ms ease;
          }
       `}</style>
      </div>

    )
  }
}

export default Playermodel
