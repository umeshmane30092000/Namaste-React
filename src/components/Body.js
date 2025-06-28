import objdata from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

  

const Body = () => {
    // super local powerful varible
    const [listofRestaurants, setListOfRestaurant] = useState(objdata);
    

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = listofRestaurants.filter(res => res.stars > 4.0);
           setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.resName} />
        ))}
      </div>
    </div>
  );
};

export default Body;