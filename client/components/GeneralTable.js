class GeneralTable extends React.Component{
  constructor(props) {
    super(props)
    cleanTableRow(props.tableValues)
    this.tableHeaders = buildTableHeaders(props.tableValues.columns);
    this.areTableHeaders = _.some(this.tableHeaders, (header) => {return !!header})
    this.title = _.get(this, 'props.tableValues.columns.title')
  }
  // TODO: Add a generalized header
      // 

  render () {
    return (
      <table className="GeneralTable inline">
        <thead>
          {buildTitle(this.title, this.tableHeaders)}
          {buildHeader(this.areTableHeaders, this.tableHeaders)}
        </thead>
        <tbody>
          {buildGeneralRows(this.props)}
        </tbody>
      </table>
    )
  }
}

var buildGeneralRows = (props) => {
  var tableRows = _.filter(props.tableValues, tableValue => {return !tableValue.skipRow});

  return _.map(tableRows, tableRow => {
    return buildRow(props.tableValues.columns.values, tableRow);
  });
}

var buildRow = (columns, rowData) => {
  var values = _.map(columns, (column, index) => {
      return rowData[column.slug]
    })
  return (<GeneralRow key={ rowData.orderPriority } values={ values }/>)
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

var buildTitle = (title, tableHeaders) => {
  if (title) {
    return (
      <tr>
        <th colSpan="3">{title}</th>
      </tr>
    )
  }
}

var buildHeader = (areTableHeaders, tableHeaders) => {
  if (areTableHeaders) {
    return (
      <TableHeader columns={ tableHeaders }/>
    )
  }
}

var buildTableHeaders= (columns) => {
  return _.map(columns.values, (columnValue) => {
    return columnValue.readable_value;
  });
}

window.GeneralTable = GeneralTable;
