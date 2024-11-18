import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 50, description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: 75, description: 'Description for product 2' },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>
  );
};

export default App;
