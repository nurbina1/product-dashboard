import React from 'react'; // Import React for creating a functional component

/**
 * ProductItem Component
 * Displays individual product details.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.product - The product object containing its details.
 * @param {string} props.product.name - The name of the product.
 * @param {number} props.product.price - The price of the product.
 * @param {string} props.product.description - The description of the product.
 */
const ProductItem = ({ product }) => {
  return (
    <div>
      {/* Render the product name as a heading */}
      <h3>{product.name}</h3>
      
      {/* Render the product price, formatted with a dollar sign */}
      <p>Price: ${product.price}</p>
      
      {/* Render the product description */}
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem; // Export the component to be used in other parts of the application
