import { useState, useReducer } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
      //   resId +
      //   "&isMenuUx4=true&submitAction=ENTER"
      // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52635"
      MENU_API + resId
    );

    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resInfo.cards[2].card.card.info.name}</h1>
      <h3>{resInfo.cards[2].card.card.info.cuisines.join(", ")}</h3>
      <h3>{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
      <h1>menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        <li>{itemCards[3].card.info.name}</li>
        <li>{itemCards[4].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
