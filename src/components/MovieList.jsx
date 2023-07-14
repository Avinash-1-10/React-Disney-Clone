import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${
              index_ % 3 === 0 ? "top-[30%]" : "top-[40%]"
            }
  `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-5 md:gap-8 scrollbar-hide pt-5 pb-3 pl-3 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <div key={index}>
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item}/>
            )}
          </div>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 
            absolute right-0 ${index_ % 3 === 0 ? "top-[30%]" : "top-[40%]"}
        `}
      />
    </div>
  );
};

export default MovieList;
