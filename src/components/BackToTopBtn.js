import React, { useEffect, useState } from "react";
import "./backToTopBtn.css";

function BackToTopBtn() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.screenY);
      });
    };
  }, []);

  return (
    <a
      href="#"
      className={`back-to-top ${scroll > 100 ? "active" : ""}`}
      onClick={backToTop}
    >
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  );
}

export default BackToTopBtn;
