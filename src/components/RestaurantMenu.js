import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" + resId 
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if(resInfo === null)return <Shimmer/>

  const { text } = resInfo?.cards[0]?.card?.card;
 const {cards}  = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR
 
  return (
    <div className="menu">
      <h1>{text}</h1>
      <h2>{cards[0].card.card.vegOnlyDetails.description}</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Dietcoke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
