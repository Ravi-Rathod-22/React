import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  let searchText = "KFC";

  const [allRestraunts, setAllRestraunts] = useState([]);
  const [filterRestraunts, setFilterRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setAllRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, Please check your internet connection! </h1>;
  }

  return !allRestraunts.length ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestraunts);
            setFilterRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestraunts.map((restraunt) => {
          return (
            <Link
              to={`/restaurant/${restraunt.info.id}`}
              key={restraunt.info.id}
            >
              <RestrauntCard {...restraunt.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
