import "./VideoFooter.css";
const VideoFooter = ({ username, description, song }) => {
  return (
    <section className="video-footer">
      <div className="video-info">
        <div className="user-info">
          <strong>@ {username}</strong>
          <p>{description}</p>
        </div>
        <div className="music-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-music-note"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
          </svg>
          <p>{song}</p>
        </div>
      </div>
      <div className="music-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-music-note-beamed"
          viewBox="0 0 16 16"
        >
          <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
          <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
          <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
        </svg>
      </div>
    </section>
  );
};

export default VideoFooter;
