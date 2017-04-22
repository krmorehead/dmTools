class CombatTable extends React.Component{
  constructor(props) {
    super(props);
    this.tableName = this.props.tableName;
    this.hp = this.props.combat_table.hp
    this.subtractHp = (amount) => {
      this.hp.value = this.hp.value - amount;
      this.props.changeTable(this.tableName, 'hp', this.hp.value);
    }
    this.addHp = (amount) => {
      this.hp.value = this.hp.value + amount;
      this.props.changeTable(this.tableName, 'hp', this.hp.value);
    }
    this.resetHp = () => {
      this.hp.value = this.hp.max;
      this.props.changeTable(this.tableName, 'hp', this.hp.value);
    }

    this.props.combat_table.columns.title = [
      <button key='subtractHp' onClick = {() => this.subtractHp(1)}>-1HP</button>,
      <button key='addHp' onClick = {() => this.addHp(1)}>+1HP</button>,
      <button key='resetHp' onClick = {() => this.resetHp()}>Reset HP</button>,
    ]
  }

  render () {
    return (
      <GeneralTable tableValues={ this.props.combat_table }/>
    )
  }
}

window.CombatTable = CombatTable;
