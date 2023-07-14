import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.title}`, { state: { movie } });
  };
  return (
    <div>
      <LazyLoadImage
        src={IMAGE_BASE_URL + movie.poster_path}
        alt=""
        effect="blur"
        className="min-w-[110px] md:min-w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default MovieCard;
