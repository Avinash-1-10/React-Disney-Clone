import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
      getTrendingMovies();
    }, []);
  
    const getTrendingMovies = () => {
      GlobalApi.getTrendingVideos.then((resp) => {
        // console.log(resp.data.results);
        setMovieList(resp.data.results);
      });
    };
  return (
    <div>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={5000}
    >
      {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt=""
            key={index}
            className="min-w-full  object-cover h-[50vh] md:h-[100vh]"
          />
        ))}
    </Carousel>
    </div>
  );
};

export default Slider;
