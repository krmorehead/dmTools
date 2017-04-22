class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.character = props.character;

    // Public functions
    this.setCurrentVideo = (video) => {
      this.setState({currentVideo: video});
    }
  }

  render() {
    var template = (
      <div>
        <Header />
        <SkillBar className='inLine' />
        <div className='padding inline'>
          <AttributeCard stats={ this.state.character.attributes }/>
          <GeneralTable tableValues={ this.state.character.combat_table }/>
        </div>
        <div className='padding'>
          <GeneralTable tableValues={ this.state.character.inventory }/>
        </div>
      </div>
    );
  return template
  };
}

          // <VideoList videos={ this.state.videos } setCurrentVideo = { this.setCurrentVideo }/>
ReactDOM.render(
  <App character={ window.exampleCharacter }/>,
  document.getElementById('app')
)