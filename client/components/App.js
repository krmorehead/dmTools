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
        <div className="col-md-5">
          <AttributeCard stats={ this.state.character.attributes }/>
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