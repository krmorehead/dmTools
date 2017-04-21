class VideoListEntry extends React.Component{
  constructor(props) {
    super(props)
    this.video = props.video;
  }

  render () {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title"
          onClick={() => this.props.setCurrentVideo(this.video)}
          >{this.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.video.snippet.description}</div>
        </div>
      </div>
    )
  }
}

window.VideoListEntry = VideoListEntry;
