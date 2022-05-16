import "./styles.css";
import POST from "./Components/proxydb";
import VideoCard from "./Components/VideoCard";

export default function App() {
  return (
    <div className="App">
      <div className="video-carousel">
        {POST.map(
          (
            { username, avatar, url, description, song, likes, comments },
            key
          ) => {
            return (
              <VideoCard
                key={key}
                username={username}
                avatar={avatar}
                url={url}
                description={description}
                song={song}
                likes={likes}
                comments={comments}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
