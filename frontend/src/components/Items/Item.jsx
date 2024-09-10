// src/components/Items/Item.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
import { Link } from "react-router-dom";
function Item({ id, name, image, new_price, old_price }) {
 

  return (
    <div className="item">
      <Link to={`/new/${id}`}>
   
        <img src={image} alt={name} />
      </Link>

      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{new_price}</div>
        <div className="item-price-old">{old_price}</div>
      </div>
    </div>
  );
}

export default Item;
