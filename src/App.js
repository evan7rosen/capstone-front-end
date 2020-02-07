import React, { useState, useEffect } from "react";
import "typeface-roboto";

import videosApi from "./api/videos";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    videosApi
      .get()
      .then(res => setVideos(res))
      .catch(err => console.log(err));
  }, [videos]);

  return (
    <div>
      <p>Ligma Balsz</p>
      {console.log(videos)}
    </div>
  );
};

export default App;
