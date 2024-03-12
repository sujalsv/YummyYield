import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };
  // const [showItems, setShowItems] = useState(false);

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {/*header*/}
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>

      {/*body*/}
      {showItems ? <ItemList items={data.itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;

//earlier the restaurant category had its own state, hence it was uncontrolled component but now it is receiving showitems as a prop from restaurantmenu hence it is a controlled component
// we have declared state variable in parent component (restaurant menu) hence it is not possible to change  the value of that directly here so I am defining a function in parent component itself and using that function here in child component.
// go through the concept of lifting the state up
