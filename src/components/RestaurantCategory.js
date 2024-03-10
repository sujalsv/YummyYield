import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div children className="flex justify-between">
        {/*header*/}
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>

      {/*body*/}
      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
