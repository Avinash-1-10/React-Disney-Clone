import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const imageSrc = IMAGE_BASE_URL + movie.backdrop_path;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.title}`, { state: { movie } });
  };
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <LazyLoadImage
        src={imageSrc}
        alt={movie.title}
        effect="blur"
        className="min-w-[150px] h-[100px] w-[300px] md:h-[180px] md:w-[275px]  object-cover rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        onClick={handleClick}
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">
        {movie.title || <Skeleton count={2} />}
      </h2>
    </section>
  );
}

export default HrMovieCard;
