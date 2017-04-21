class TableHeader extends React.Component{
  constructor(props) {
    super(props)
    this.columns = this.props.columns;
  }

  render () {
    return (
      <tr className='TableHeader'>
        { buildColumns(this.columns) }
      </tr>
    )
  }
}

var buildColumns = (columns) => {
  return _.map(columns, (columnName, index) => {
    return <th key={ index }>{ columnName }</th>
  })
}

window.TableHeader = TableHeader;
