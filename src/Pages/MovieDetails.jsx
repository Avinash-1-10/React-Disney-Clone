import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Disney+.png";
import Header from "../components/Header";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  const movie = location.state.movie;

  const handleClick = () => {
    naviagte(`/movie/${movie.title}/video`);
  };

  const transparentBg = {
    background:
      "linear-gradient(to left, rgba(5, 6, 20, 0.384) 0%, rgba(5, 6, 20, 0.7) 10%, rgb(5, 6, 20) 100%)",
  };
  const dark = true;
  return (
    <div className="relative">
      <Header dark={dark} />
      <div
        className="absolute w-[100%] md:w-[40%] h-[100vh] flex-row p-5 pt-[6rem]"
        style={transparentBg}
      >
        <h2 className="pb-3 text-[30px] text-blue-300 font-bold">
          {movie.title}
        </h2>
        <p className="text-white text-justify">{movie.overview}</p>
        <div className="pt-5 flex justify-between items-center">
          <span className="bg-yellow-500 rounded-md text-black font-bold p-1 px-2">
            Rating: {movie.vote_average}
          </span>
          <button
            className="p-2 px-3 border-none bg-blue-600 font-semibold rounded-md text-lg uppercase "
            onClick={handleClick}
          >
            Watch Now
          </button>
        </div>
        <img src={Logo} alt="" className="w-[30%] m-auto mt-10" />
      </div>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-full h-[100vh] object-cover"
      />
    </div>
  );
};

export default MovieDetails;
