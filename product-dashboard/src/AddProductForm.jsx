import React, { useState } from 'react';

// Functional component for adding a new product
// Receives a prop `onAddProduct`, which is a function to handle adding a new product to the list
const AddProductForm = ({ onAddProduct }) => {
  // State variables to manage the form inputs
  const [name, setName] = useState(''); // State for the product name
  const [price, setPrice] = useState(''); // State for the product price
  const [description, setDescription] = useState(''); // State for the product description
  const [error, setError] = useState(''); // State for error messages during validation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)

    // Validation: Check if all fields are filled
    if (!name || !price || !description) {
      setError('All fields are required.'); // Set an error message if validation fails
      return; // Stop further execution
    }

    // Validation: Ensure the price is a positive number
    if (parseFloat(price) <= 0) {
      setError('Price must be a positive number.');
      return;
    }

    // Clear the error state if all validations pass
    setError('');

    // Call the parent-provided function to add a new product
    onAddProduct({ 
      name, 
      price: parseFloat(price), // Convert price to a float before passing it
      description 
    });

    // Reset the form fields after successful submission
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      {/* Display error messages if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Input field for product name */}
      <label htmlFor="name">Name</label>
      <input
        id="name" // Accessibility: Links the label to the input
        type="text" // Text input for product name
        placeholder="Name" // Placeholder text displayed inside the input field
        value={name} // Controlled component: Value bound to state
        onChange={(e) => setName(e.target.value)} // Update state on user input
      />

      {/* Input field for product price */}
      <label htmlFor="price">Price</label>
      <input
        id="price" // Accessibility: Links the label to the input
        type="number" // Number input for product price
        placeholder="Price" // Placeholder text
        value={price} // Controlled component: Value bound to state
        onChange={(e) => setPrice(e.target.value)} // Update state on user input
      />

      {/* Textarea for product description */}
      <label htmlFor="description">Description</label>
      <textarea
        id="description" // Accessibility: Links the label to the textarea
        placeholder="Description" // Placeholder text
        value={description} // Controlled component: Value bound to state
        onChange={(e) => setDescription(e.target.value)} // Update state on user input
      />

      {/* Submit button */}
      <button 
        type="submit" // Button type ensures it acts as a form submit button
        disabled={!name || !price || !description} // Disable button if any field is empty
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm; // Export the component for use in other parts of the application
