import React, { useEffect, useState } from "react";
import "./banner.css";

import MovieContnet from "../components/MovieContnet";
import MovieDate from "../components/MovieDate";
import PlayButton from "../components/PlayButton";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideImage = (id) => {
    const newMovie = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovie);
  };
  return (
    <>
      <div className="banner ">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <div
              key={movie._id}
              className={`movie container  ${
                movie.active ? "active" : undefined
              }  `}
            >
              <img
                src={movie.bgImg}
                alt="backgroundImage"
                className={`bgimg ${movie.active ? "active" : undefined}`}
              />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-12 padd">
                    <MovieContnet movie={movie} />
                  </div>

                  <div className="col-lg-6 col-md-12 padd ">
                    <MovieDate movie={movie} />
                    <PlayButton movie={movie} />
                  </div>
                </div>
              </div>
            </div>
          ))}

        {movies && movies.length > 0 && (
          <MovieSwiper slides={movies} slideImage={handleSlideImage} />
        )}
      </div>
    </>
  );
}

export default Banner;
