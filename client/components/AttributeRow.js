class AttributeRow extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    var stat = this.props.stat;
    return (
      <tr className='AttributeRow'>
        <td>
          { stat.readable_value }
        </td>
        <td className='AttributeCell'>
          { stat.value }
        </td>
        <td className='AttributeCell'>
          { calculateBonus(stat.value) }
        </td>
      </tr>
    )
  }
}

var calculateBonus = (statValue) => {
  return Math.floor((statValue - 10) / 2)
}

window.AttributeRow = AttributeRow;
