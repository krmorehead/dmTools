class GeneralRow extends React.Component{
  constructor(props) {
    super(props)
  }

  render () {
    return (
          <tr>
            {buildCells(this.props.values)}
          </tr>
    )
  }
}

var buildCells = (values) => {
  return _.map(values, (value, index) => {
    return <td key={ index }>{ value }</td>
  })
}

window.GeneralRow = GeneralRow;
