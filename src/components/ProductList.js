import React from "react";
import laptopImg from "../assets/laptop.jpg"; // Importing laptop image
import smartphoneImg from "../assets/smartphone.jpg"; // Importing smartphone image

const ProductList = () => {
  return (
    <div>
      <h2>Featured Products</h2>

      <div>
        <img src={laptopImg} alt="Laptop" width="100" />
        <h3>Laptop</h3>
        <p>$999</p>
        <button>Add to Cart</button>
      </div>

      <div>
        <img src={smartphoneImg} alt="Smartphone" width="100" />
        <h3>Smartphone</h3>
        <p>$699</p>
        <button>Add to Cart</button>
      </div>

    </div>
  );
};

export default ProductList;
