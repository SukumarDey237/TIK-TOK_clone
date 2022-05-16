import "./VideoCard.css";
import VideoSideBar from "./VideoSideBar";
import VideoFooter from "./VideoFooter";
import { useRef, useState } from "react";

const VideoCard = ({
  username,
  avatar,
  url,
  description,
  song,
  likes,
  comments
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="video-card">
      <video
        ref={videoRef}
        onClick={() => handlePlayPause()}
        src={url}
        loop
        poster
      ></video>
      <VideoSideBar avatar={avatar} likes={likes} comments={comments} />
      <VideoFooter username={username} description={description} song={song} />
    </div>
  );
};

export default VideoCard;
