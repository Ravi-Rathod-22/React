import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

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
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
