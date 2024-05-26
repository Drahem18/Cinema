import React from "react";
import "./modal.css";

function Modal({ movie, status, toggleModal }) {
  return (
    <div
      onClick={toggleModal}
      className={`movieModal ${status ? "active" : ""}`}
    >
      <a href="/" onClick={toggleModal} className="modalClose">
        <i>
          <ion-icon name="close-outline"></ion-icon>
        </i>
      </a>
      <iframe
        width="866"
        height="487"
        src={status ? movie.video : ""}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
