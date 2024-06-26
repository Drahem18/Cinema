import React, { useEffect, useState } from "react";
import "./scheduel.css";
import Card from "../components/Card";

function Scheduel() {
  const filterList = [
    {
      _id: 1,
      name: "all",
      active: true,
    },
    {
      _id: 2,
      name: "Romance",
      active: false,
    },
    {
      _id: 3,
      name: "Action",
      active: false,
    },
    {
      _id: 4,
      name: "Thriller",
      active: false,
    },
    {
      _id: 5,
      name: "Horror",
      active: false,
    },
    {
      _id: 6,
      name: "Adventure",
      active: false,
    },
  ];
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = () => {
    fetch("/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFiltersClick = (category) => {
    setFilters(
      filterList.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    const newDataMovie = data.filter((movie) => movie.category === category);

    category === "all" ? setMovies(data) : setMovies(newDataMovie);
  };

  return (
    <section id="schedule" className="scheduel">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Openning This Week</h4>
        </div>
        <ul className="filters ">
          {filters.map((filter) => (
            <li
              key={filter._id}
              className={filter.active ? "active" : ""}
              onClick={() => {
                handleFiltersClick(filter.name);
              }}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="row mt-5">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <Card key={movie._id} movie={movie} />)}
      </div>
    </section>
  );
}

export default Scheduel;
