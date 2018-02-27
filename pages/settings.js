import data from './data.js'

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: data.player[0],
      moveup: data.control[0],
      movedown: data.control[2],
      moveleft: data.control[3],
      moveright: data.control[1],
    };
  }

  setName = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    console.log(this.state.name)
    return (
      <div>
        <form>
        <li><label>Name:<input onChange={this.setName}  placeholder={this.state.name}/></label></li>
      <li><label>Difficulty<select >
          <option value={data.difficulty[0]}>Easy</option>
          <option value={data.difficulty[1]}>Normal</option>
          <option selected value={data.difficulty[2]}>Hard</option>
        </select></label></li>
        <li><label>Move up:<input type='text' name='moveup' placeholder={this.state.moveup} maxlength='1'/></label></li>
        <li><label>Move down:<input type='text' name='movedown' placeholder={this.state.movedown} maxlength='1'/></label></li>
        <li><label>Move left:<input type='text' name='moveleft' placeholder={this.state.moveleft} maxlength='1'/></label></li>
        <li><label>Move right:<input type='text' name='moveright' placeholder={this.state.moveright} maxlength='1'/></label></li>
        <button type='submit'>Save settings</button>
        </form>

          <style jsx>{`
            li {
              font-size: 10px;
              list-style: none;
              margin-top: 5px;
            }
            input {
              border: none;
              border-bottom: 2px solid black;
              width: auto;
              text-align: center;
              font-size: 15px;
              outline-style: none;
            }
            input:active, input:hover, input:focus {
              border-bottom: 2px solid red;
            }
       `}</style>
      </div>
    )
  }
}

export default Settings
