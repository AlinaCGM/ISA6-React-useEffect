import React from "react";
import "./Country.css";
export default function Country(props) {
  const item = props.country;
  let borders = props.country.borders;

  return (
    <div className="item">
      <h3> Country: {item.name.common}</h3>
      <h5>Region: {item.region}</h5>
      <a href={item.maps.googleMaps} target="_blank" rel="noopener noreferrer">
        Visit map here
      </a>
      <img className="image" src={item.flags.png} alt="" />

      <div className="last-div">
        {borders
          ? borders.map((item) => {
              return <li>{item}</li>;
            })
          : "no borders"}
      </div>
    </div>
  );
}
