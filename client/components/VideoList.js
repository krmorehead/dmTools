class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="video-list media">
      {buildList(this.props)}
    </div>);
  }
};

var buildList = (props) => {
  var videos = props.videos;
  return _.map(videos, (video, index) => {
    return <VideoListEntry
            key={ index }
            setCurrentVideo = { props.setCurrentVideo }
            video={ video }/>
  })
}

window.VideoList = VideoList;
