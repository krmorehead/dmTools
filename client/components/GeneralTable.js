class GeneralTable extends React.Component{
  constructor(props) {
    super(props)
    cleanTableRow(props.tableValues)
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

var cleanTableRow = (tableValues) => {
  var isUnordered = _.some(tableValues, (value) => {
    return (!value.orderPriority && !value.skipRow);
  });
  if (isUnordered) {
    var orderNumber = 0;
    _.each(tableValues, (value) => {
      value.orderPriority = orderNumber++;
    });
  }
}

window.GeneralTable = GeneralTable;
