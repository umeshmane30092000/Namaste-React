import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);
  
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
