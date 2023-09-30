import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Charts({ products }) {
  const [groupedProducts, setGroupedProducts] = useState([]);

  // Use useEffect to update the groupedProducts whenever products change
  useEffect(() => {
    // Function to group products by name and calculate total quantities
    const groupProductsByItemName = (data) => {
      const groupedData = {};
      data.forEach((product) => {
        if (!groupedData[product.name]) {
          groupedData[product.name] = {
            name: product.name,
            quantity: 0,
          };
        }
        groupedData[product.name].quantity += product.quantity;
      });
      return Object.values(groupedData);
    };

    // Call the grouping function with the products prop and update state
    setGroupedProducts(groupProductsByItemName(products));
  }, [products]); // Listen for changes in the products prop

  return (
    <BarChart width={600} height={400} data={groupedProducts}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantity" fill="#8884d8" />
    </BarChart>
  );
}

export default Charts;
