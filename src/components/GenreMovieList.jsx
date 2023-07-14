import React from "react";
import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenreList.genere.map(
        (item, index) =>(
            <div key={item.id} className="p-3 md:p-8 px-4 md:px-8">
              <h2 className="text-20 md:text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId = {item.id} index_={index}/>
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
