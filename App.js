import React from "react";
import ReactDOM from "react-dom/client";

// jsx- javascript synctax to create element merge html and js together
// JSX is Html like syntax
// jsx code is transplile before going to browser- parcel - Babel
// attribute to jsx give in camelCase
// Bable transpile code into react.createElement

// React component

/* 
Header 
     logo 
     Navitems
Body
   - search bar component
   - card container
          - restro card
Footer
 - cpyright
 - LInks
 -address
 - contant

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
      </div>
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>

      </div>
    </div>
  );
}

const objdata =[{
  resName: "Meghna Food umesh mane",
  cuisine: "Biryani, North Indain",
},
{
  resName: "KFC",
  cuisine: "Fast food North Indain",
},
{
  resName: "Dominos",
  cuisine: "Pizza, Fast food",

},
{
  resName: "Burger King",
  cuisine: "Fast food, Burger",
},
{
  resName: "Subway",
  cuisine: "Sandwich, Fast food",
},
{
  resName: "Haveli",
  cuisine: "North Indain, Punjabi"
}
];



const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="logo-image"
        className="res-logo"
        src="https://vismaifood.com/storage/app/uploads/public/912/551/ed8/thumb__700_0_0_0_auto.jpg"
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 min</h4>
    </div>
  );
};

/*

    {arrList.map((restaurant) =>(
      <RestaurantCard resData={restaurant} />
    ))}
*/

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="res-container">
        {objdata.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.resName} />)
          )}
      </div>
    </div>
  );
}


//props - passing arguments to component


const AppLayout = () => {
  return (
    <div className="app">
     <Header/>
     <Body/>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
