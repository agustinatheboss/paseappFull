import React from "react";
import Card from "../Card/Card";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <section className="card-container">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
