var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={"https://www.youtube.com/embed/"+ props.video.id.videoId + "?autoplay=0"}
        allowFullScreen>
      </iframe>
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
