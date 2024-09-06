import { useState } from "react";
import { restrauntList } from "../config";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText, restraunts) {
  return restraunts.filter((restraunt) =>
    restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  let searchText = "KFC";

  const [restraunts, setRestraunts] = useState(restrauntList);
  const [searchInput, setSearchInput] = useState();
  return (
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
            const data = filterData(searchInput, restraunts);
            setRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restraunts.map((restraunt) => {
          return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
