import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* <h3>{resList.data.name}</h3>
      <h4>{resList.data.cuisines.join(", ")}</h4>
      <h4>{resList.data.avgRating} stars</h4>
      <h4>₹{resList.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resList.data.deliveryTime} minutes</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard;
