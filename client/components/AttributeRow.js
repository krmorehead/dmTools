class AttributeRow extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    var stat = this.props.stat;
    return (
      <tr className='AttributeRow'>
        <th>
          { stat.readable_value }
        </th>
        <th className='AttributeCell'>
          { stat.value }
        </th>
        <th className='AttributeCell'>
          { calculateBonus(stat.value) }
        </th>
      </tr>
    )
  }
}

var calculateBonus = (statValue) => {
  return Math.floor((statValue - 10) / 2)
}

window.AttributeRow = AttributeRow;
