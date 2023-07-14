import React from "react";
import ReactPlayer from 'react-player/youtube'
import Header from "./Header";

const VideoPlayer = () => {
    const dark = true;
  return (
    <>
      <Header dark={dark} />
      <div className="flex justify-center items-center h-screen">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=emrUk0cW3O4"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
