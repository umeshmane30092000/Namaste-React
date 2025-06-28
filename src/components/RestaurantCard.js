import { CDN_URL } from "../utils/contants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="logo-image"
        className="res-logo"
        src={CDN_URL}
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.stars} stars</h4>
      <h4>38 min</h4>
    </div>
  );
};

export default RestaurantCard;