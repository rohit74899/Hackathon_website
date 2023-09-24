import React, { useState } from 'react';
import Container from '@mui/material/Container'
function Products() { // Make sure the component name starts with an uppercase letter
  // Use React Hooks within a functional component
  const [products, setProducts] = useState([]); // Example useState usage
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProduct = products.find((product) => product.name === productName);
    if (existingProduct) {
      existingProduct.quantity += parseInt(productQuantity, 10);
      setProducts([...products]);
    } else {
      const newProduct = {
        name: productName,
        quantity: parseInt(productQuantity, 10),
      };
      setProducts([...products, newProduct]);
    }
    setProductName('');
    setProductQuantity('');
  };

  return (
    <>
        <Container>
        <div>
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>

      <h3>Product List</h3>
      <ul>
        
        {products.map((product, index) => (
          <li key={index}>
            {product.name}: {product.quantity}
          </li>
        ))}
      </ul>
    </div>

        </Container>
    </>
    
  );
}

export default Products; // Make sure to export the component with the correct name
