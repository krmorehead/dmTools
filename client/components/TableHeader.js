class TableHeader extends React.Component{
  constructor(props) {
    super(props)
    this.columns = this.props.columns;

    this.sortBy = (value) => {
      if (this.props.sortBy) {
        this.props.sortBy(value);
      }
    };

    this.buildColumns = (columns) => {
      return _.map(columns, (column, key) => {
        var value = column.value ? column.value : column;
        return <th onClick={ () => { return this.sortBy(column.slug) } } key={ key }>{ value }</th>
      })
    }
  }

  render () {
    return (
      <tr className='TableHeader'>
        { this.buildColumns(this.columns) }
      </tr>
    )
  }
}



window.TableHeader = TableHeader;
