import React, { useState } from "react";
import "./styles.css";
import { travelDictionary } from "./dictionarydb.js";

var recommendedPlaces = Object.keys(travelDictionary);

export default function App() {
  var [genre, setGenre] = useState("Most_Visited");

  function genreClickHandler(category) {
    setGenre(category);
  }

  return (
    <div className="App">
      <header className="Header">
        <h1> Travelgram </h1>
        <h3 style={{ color: "white" }}>
          "Life is short and the world is wide."
        </h3>
      </header>

      <div>
        {recommendedPlaces.map(function (category) {
          return (
            <button
              key={category}
              className="Btncat"
              onClick={() => genreClickHandler(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="Placelst">
        {travelDictionary[genre].map(function (place) {
          return (
            <div key={place.name} className="Lstitem">
              <img className="Placeimage" src={place.img} alt="place" />
              <div className="Placename">{place.name} </div>
              <div className="Placeloc">Location: {place.location} </div>
              <div className="Rating">Rating: {place.rating} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
