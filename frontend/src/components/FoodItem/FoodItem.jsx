import { useState } from "react";
import { assets } from "../../assets/assets";
import "./foodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="foodItem">
      <div className="foodItem-img-container">
        <img src={image} alt="" className="foodItem-image" />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="foodItem-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodItem-info">
        <div className="foodItem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foodItem-desc">{description}</p>
        <p className="foodItem-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
