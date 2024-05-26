import React from "react";
import "./movieContent.css";
import Button from "./Button";

function MovieContnet({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : ""}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year} </span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <Button
        name="Book"
        color="#ff3700"
        bgColor="white"
        icon={<ion-icon name="bookmark-outline"></ion-icon>}
      />
      <Button name="My List" icon={<ion-icon name="add-outline"></ion-icon>} />
    </div>
  );
}

export default MovieContnet;
