class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.character = props.character;

    // Public functions
    this.setCurrentVideo = (video) => {
      this.setState({currentVideo: video});
    }
    this.changeAttr = (attr, newValue) => {
      var characterCopy = _.cloneDeep(this.state.character);
      characterCopy.attributes[attr].value = newValue;
      this.setState({character: characterCopy});
    }
    this.changeCharacterTable = (table, key, newValue) => {
      var characterCopy = _.cloneDeep(this.state.character);
      characterCopy[table][key].value = newValue;
      this.setState({character: characterCopy})
    }
  }

  render() {
    var template = (
      <div>
        <Header />
        <div className='sideBar'>
          <SkillBar
          className='inLine'
          stats={ this.state.character.attributes }
          skillList={ this.skillList }/>
        </div>
        <div className='padding inline'>
          <AttributeCard stats={ this.state.character.attributes }/>
          <CombatTable changeTable={ this.changeCharacterTable } tableName={ 'combat_table' } combat_table = { this.state.character.combat_table }/>
        </div>
        <div className='padding inventory'>
          <GeneralTable changeTable={ this.changeCharacterTable } tableName={ 'inventory' } className='padding' tableValues={ this.state.character.inventory }/>
        </div>
      </div>
    );
  return template
  };
}

// <button onClick={ () => {return this.changeAttr('cha', this.state.character.attributes.cha.value +1)} }>Increase Charisma</button>


ReactDOM.render(
  <App character={ window.exampleCharacter }/>,
  document.getElementById('app')
)