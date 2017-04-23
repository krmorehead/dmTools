class GeneralTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {};

    cleanTableRow(props.tableValues)
    this.tableHeaders = buildTableHeaders(props.tableValues.columns);
    this.areTableHeaders = _.some(this.tableHeaders, (header) => {return !!header})
    this.title = _.get(this, 'props.tableValues.columns.title')
    this.tableName = this.props.tableName;

    this.state.changeRow = (key, newValue) => {
      this.props.changeTable(this.tableName, key, newValue)
    }
  }

  render () {
    return (
      <table className="GeneralTable padding inline">
        <thead>
          {buildTitle(this.title, this.tableHeaders)}
          {buildHeader(this.areTableHeaders, this.tableHeaders)}
        </thead>
        <tbody>
          {buildGeneralRows(this.props, this.state)}
        </tbody>
      </table>
    )
  }
}

var buildGeneralRows = (props, state) => {
  var tableRows = _.filter(props.tableValues, tableValue => {return !tableValue.skipRow});

  return _.map(tableRows, tableRow => {
    return buildRow(props.tableValues.columns.values, tableRow, state);
  });
}

var buildRow = (columns, rowData, state) => {
  var values = _.map(columns, (column, index) => {
      return buildValue(rowData, column);
    })
  return (<GeneralRow changeRow={ state.changeRow } key={ rowData.orderPriority } values={ values }/>)
}

var buildValue = (rowData, column) => {
  var value = {value: rowData[column.slug]};
  if (rowData.max && column.slug === 'value') {
    value.max = rowData.max;
  }
  return value;
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
        <th colSpan={ tableHeaders.length }>{title}</th>
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
  if (columns.tableHeaders) {
    return columns.tableHeaders;
  } else {
    return _.map(columns.values, (columnValue) => {
      return columnValue.readable_value;
    });
  }
}

window.GeneralTable = GeneralTable;
