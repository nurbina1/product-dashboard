import React from 'react'; // Import React for creating a functional component
import ProductItem from './ProductItem'; // Import the ProductItem component to render individual product details

/**
 * ProductList Component
 * Renders a list of products by mapping over the `products` array and displaying each item using the `ProductItem` component.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.products - An array of product objects to be displayed.
 * Each product object should have `id`, `name`, `price`, and `description` properties.
 */
const ProductList = ({ products }) => {
  return (
    <div>
      {/* Header for the product list */}
      <h2>Product List</h2>

      {/* Map over the products array and render a ProductItem for each product */}
      {products.map((product) => (
        <ProductItem 
          key={product.id} // Unique key for React to efficiently track changes
          product={product} // Pass the individual product object as a prop to ProductItem
        />
      ))}
    </div>
  );
};

export default ProductList; // Export the component to be used in other parts of the application
