import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Products.scss';

const Products = () => {
  // @ts-ignore
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCard = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
