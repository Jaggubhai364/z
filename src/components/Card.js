import React, { useEffect, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  const dispatch = useDispatchCart();
  let data = useCart();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0] || ""); // Initialize with the first option
  const [finalPrice, setFinalPrice] = useState(0);

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    // console.log(food);
    // console.log(new Date());
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.ImgSrc,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }
    
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  // Calculate final price whenever qty or size changes
  useEffect(() => {
    if (options[size]) {
      setFinalPrice(qty * parseInt(options[size]));
    }
  }, [qty, size, options]);

  return (
    <div>
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          fontFamily: "sans-serif",
          maxHeight: "360px",
        }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>

          <div className="container w-100">
            {/* Quantity Selector */}
            <select
              className="m-2 h-100 bg-success"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Size Selector */}
            <select
              className="m-2 h-100 bg-success"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            {/* Display final price */}
            <div className="d-inline fs-5">₹{finalPrice}/-</div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
