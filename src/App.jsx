import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import Home from "./Pages/Home";
import NotFound from "./components/NotFound";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movie/:id/video" element={<VideoPlayer/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


