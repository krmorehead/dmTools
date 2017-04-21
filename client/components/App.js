class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.currentVideo = props.videos[0];
    this.state.videos = props.videos;

    // Public functions
    this.setCurrentVideo = (video) => {
      this.setState({currentVideo: video});
    }

  }

  render() {
    var template = (
      <div>
        <Header />
        <div className="col-md-7">
          <VideoPlayer video={ this.state.currentVideo }/>
        </div>
        <div className="col-md-5">
          <VideoList videos={ this.state.videos } setCurrentVideo = { this.setCurrentVideo }/>
        </div>
      </div>
    );
  return template
  };
}

ReactDOM.render(
  <App videos={ window.exampleVideoData }/>,
  document.getElementById('app')
)