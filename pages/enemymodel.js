import data from './data.js'

class Enemy extends React.Component {
  constructor(props) {
    super(props)

    this.state = Object.assign({}, props.position)
    this.axis = Math.random() > 0.5 ? 'top' : 'left'

    this.direction = 'forwards'
  }

  move = () => {
    const newState = {}
    const { axis, state, direction } = this

    newState[axis] = direction === 'forwards' ? state[axis] + 5 : state[axis] - 5
    this.setState(newState)
  }

  componentDidMount() {
    this.move()
  }

  toggleDirection() {
    this.direction = this.direction === 'forwards' ? 'backwards' : 'forwards'
  }

  inside() {
    const { state, axis } = this
    const value = state[axis]

    if (value < 0) {
      return false
    }

    if (axis === 'top' && value > (data.field[1] - data.modelSize[1])) {
      return false
    }

    if (axis === 'left' && value > (data.field[0] - data.modelSize[1])) {
      return false
    }

    return true
  }

  componentDidUpdate() {
    if (!this.inside()) {
      this.toggleDirection()
    }

    setTimeout(this.move, 20)
  }

  render() {
    const { top, left } = this.state

    return (
      <div>
        <main/>
        <style jsx>{`
          main {
            width: ${data.modelSize[1]}px;
            height: ${data.modelSize[1]}px;
            background: blue;
            box-sizing: border-box;
            border: 2px dotted yellow;
            position: absolute;
            top: ${top}px;
            left: ${left}px;
            transition: 500ms ease;
          }
       `}</style>
      </div>
    )
  }
}

export default Enemy
