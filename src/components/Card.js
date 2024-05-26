import React from "react";
import "./card.css";

function Card({ movie }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="PreviewImage" className="img-fluid" />
        <p>
          <b>{movie.length}</b> <span>|</span> <b>{movie.category}</b>
        </p>
        <div className="content">
          <h4>{movie.title}</h4>
          <div className="d-flex mt-2">
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
