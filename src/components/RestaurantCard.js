import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-200 hover:bg-red-100">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};
// higher order component
//input will be restaurant card and out will be restaurant card with closed label if it is.

export const withClosedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 text-black rounded-md m-2 px-2">
          Closed
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
