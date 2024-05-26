import React, { useState } from "react";
import "./playButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

function PlayButton({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className={`trailer d-flex align-items-center justify-content-center ${
          movie.active ? "active" : ""
        }`}
      >
        <a href="/" className="play-btn" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPlay} size="2x" />
        </a>
        <p>Wach Trailer</p>
      </div>
      {movie.active && (
        <Modal movie={movie} status={modal} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default PlayButton;
