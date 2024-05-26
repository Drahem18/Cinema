import React, { useEffect, useRef, useState } from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import "./header.css";
import Search from "../components/Search";
import Button from "../components/Button";

function Header() {
  const [navList, setNavList] = useState(navListData);

  const handleNavOnClick = (id) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav.id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavList(newNavList);
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
  }, [scroll]);

  const closeBtn = useRef();
  const closeNav = () => {
    closeBtn.current.classList.add("close");
    closeBtn.current.classList.remove("open");
  };

  const openNav = () => {
    closeBtn.current.classList.remove("close");
    closeBtn.current.classList.add("open");
  };
  return (
    <>
      <header className={`${scroll > 100 ? "scrolled" : ""}  `}>
        <a className="logo" href="/">
          Cinema
        </a>

        <ul className="hide-element nav  gap-5">
          {navList.map((nav) => {
            return (
              <NavListItem
                key={nav.id}
                nav={nav}
                navOnClick={handleNavOnClick}
              />
            );
          })}
        </ul>
        <Search hide={true} />
        <Button
          hide={true}
          name="Login"
          icon={<ion-icon name="log-in-outline"></ion-icon>}
        />

        <div className="text-light fs-4 menue " onClick={openNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>

      {/* ################################################################################################### */}

      <header ref={closeBtn} className={`scrolled sidebar `}>
        <div onClick={closeNav} className="text-light fs-4 ">
          <ion-icon name="close-outline"></ion-icon>
        </div>

        <ul className="nav ">
          {navList.map((nav) => {
            return (
              <NavListItem
                key={nav.id}
                nav={nav}
                navOnClick={handleNavOnClick}
              />
            );
          })}
        </ul>
        <Search />
        <Button
          name="Login"
          icon={<ion-icon name="log-in-outline"></ion-icon>}
        />
      </header>
    </>
  );
}

export default Header;
