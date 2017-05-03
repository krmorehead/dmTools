class CombatTable extends React.Component{
  constructor(props) {
    super(props);
    this.tableName = this.props.tableName;
  }

  render () {
    return (
      <GeneralTable changeTable={ this.props.changeTable } tableName={ this.tableName } tableValues={ this.props.combat_table }/>
    )
  }
}

window.CombatTable = CombatTable;
