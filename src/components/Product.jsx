import React from 'react';

const Product = ({ product, handleAddToCard }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.tile} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCard(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
