import React from "react";
import ReactDOM from "react-dom/client";

// jsx- javascript synctax to create element merge html and js together
// JSX is Html like syntax
// jsx code is transplile before going to browser- parcel - Babel
// attribute to jsx give in camelCase
// Bable transpile code into react.createElement

// React component
const elem = <span>React Element</span>;

const title = (
  <div>
    <h1 className="head" tabIndex="5">
      {elem}<br/>
      Namaste React uisng JSX
    </h1>
  </div>
);


// functinal component - NEW - just a normal js function return jsx

// Component composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <h2>{title}</h2>
      <h1 className="header">Namste react functional component</h1>
    </div>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
