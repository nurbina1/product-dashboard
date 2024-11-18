import React, { useState } from 'react'; // Import React and the useState hook for managing state
import ProductList from './ProductList'; // Import the ProductList component to display the list of products
import AddProductForm from './AddProductForm'; // Import the AddProductForm component to allow users to add products

// The main App component that serves as the entry point for the application
const App = () => {
  // State to manage the list of products
  // Initially contains two sample products with id, name, price, and description
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 50, description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: 75, description: 'Description for product 2' },
  ]);

  /**
   * Function to handle adding a new product to the list.
   * @param {Object} newProduct - An object containing the name, price, and description of the product.
   * The id is automatically generated based on the current product count.
   */
  const addProduct = (newProduct) => {
    // Update the products state by appending the new product to the existing array
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      {/* Main header of the application */}
      <h1>Product Dashboard</h1>

      {/* ProductList component renders the list of products */}
      {/* Passes the `products` array as a prop to display the product list */}
      <ProductList products={products} />

      {/* AddProductForm component renders the form for adding new products */}
      {/* Passes the `addProduct` function as a prop to handle adding new products */}
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
};

export default App; // Export the App component for rendering in the main entry file
