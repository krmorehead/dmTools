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
  return _.map(values, (value) => {
    return <th>{ value }</th>
  })
}

window.GeneralRow = GeneralRow;
