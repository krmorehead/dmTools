class GeneralRow extends React.Component{
  constructor(props) {
    super(props)

    var slug = _.get(this, 'props.rowData.slug');

    this.subtract = (amount) => {
      var value = _.get(this, 'props.rowData.value', 0) - amount;
      this.props.changeRow(slug, value);
    }
    this.add = (amount) => {
      var value = _.get(this, 'props.rowData.value', 0) + amount;
      this.props.changeRow(slug, value);
    }
    this.reset = () => {
      var value = _.get(this, 'props.rowData.max', 0);
      this.props.changeRow(slug, value);
    }
    this.buildNumberEdit = () => {
      if (_.get(this.props, 'rowData.editFields.number', false)) {
        return ([
          <td key='add'>
            <button onClick={ () => { return this.add(1) } }>+</button>
          </td>,
          <td key='subtract'>
            <button onClick={ () => { return this.subtract(1) } }>-</button>
          </td>,
          <td key='reset'>
            <button onClick={ () => { return this.reset() } }><i className='material-icons md-18'>replay</i></button>
          </td>
          ]
        )
      }
    }
  }


  render () {
    return (
      <tr>
        {buildCells(this.props.values, this.props)}
        {this.buildNumberEdit(this.props)}
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
