class GeneralRow extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <tr>
        {buildCells(this.props.values, this.props)}
      </tr>
    )
  }
}

var buildCells = (values, props) => {
  return _.map(values, (value, index) => {
    return <td key={ index }>{ buildValue(value) }</td>
  })
}

var buildValue = (value) => {
  if (typeof value === 'object') {
    var rawValue = value.value;
    if (value.max) {
      rawValue += `/${value.max}`
    }
    return rawValue;
  } else {
    return value;
  }
}

window.GeneralRow = GeneralRow;
