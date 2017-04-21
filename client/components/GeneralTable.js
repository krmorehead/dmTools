class GeneralTable extends React.Component{
  constructor(props) {
    super(props)
    // this.tableHeaders = buildTableHeaders(this.props.);
  }
  // TODO: Add a generalized header
  // <thead>
  //   <TableHeader columns={ this.tableHeaders }/>
  // </thead>

  render () {
    return (
      <table className="GeneralTable inline">
        <tbody>
          {buildGeneralRows(this.props)}
        </tbody>
      </table>
    )
  }
}

var buildGeneralRows = (props) => {
  var tableRows = _.filter(props.tableValues, tableValue => {return !tableValue.skipRow})
  return _.map(tableRows, tableRow => {
    return <tr key ={ tableRow.orderPriority }>
      { buildRow(props.tableValues.columns.value, tableRow) }
    </tr>
  });
}

var buildRow = (columns, rowData) => {
  return _.map(columns, (column, index) => {
      return <th className='generalCell' key={ index }>{ rowData[column.slug] }</th>
    })
}

window.GeneralTable = GeneralTable;
