/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./trendCard.css";

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      <img src={slide.previewImg} alt="PreviewImg" className="img-fluid" />
      <a href="/">
        add to calender <ion-icon name="calendar-outline"></ion-icon>
      </a>
    </div>
  );
}

export default TrendCard;
