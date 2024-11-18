import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;
