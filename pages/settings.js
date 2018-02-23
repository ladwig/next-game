class Settings extends React.Component {
  render() {
    return (
      <div>
        <ul>
        <li><label>Name:<input type='text' name='name' /></label></li>

      <li><label>Difficulty<select>
          <option value='0'>Easy</option>
          <option value='1'>Normal</option>
          <option selected value='2'>Hard</option>
        </select></label></li>

        <li><label>Move up:<input type='text' name='moveup'/></label></li>
        <li><label>Move down:<input type='text' name='movedown'/></label></li>
        <li><label>Move left:<input type='text' name='moveleft'/></label></li>
        <li><label>Move right:<input type='text' name='moveright'/></label></li>
        </ul>
          <style jsx>{`
            li {
              font-size: 10px;
              list-style: none;
              margin-top: 5px;
            }
       `}</style>
      </div>
    )
  }
}

export default Settings
