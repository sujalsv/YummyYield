import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
// Local State Variable - Super powerful variable
const [listOfRestaurants, setListOfRestraunt] = useState(resList);


// const arr = useState(resList);
// const [listOfRestaurants, setListOfRestraunt]= arr;



//   const listOfRestaurants = arr[0];
//   const setListOfRestraunt = arr[1];



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;