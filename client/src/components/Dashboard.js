import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container'
import Charts from './Charts';

function Dashboard() { 
  const [item,setitem]=useState({
    name:"",
    quantity:""
  })

  //**************************************************** */
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setitem({
      ...item,
      [name]:value
    });
  };

  const Postdata = async (e) => {
    e.preventDefault();
  
    const { name, quantity } = item;
  
    const res = await fetch("/Add_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        quantity,
      }),
    });
  
    const data = await res.json();
  
    if (data.error || !data) {
      window.alert("Item not added", data);
      console.log("Invalid");
    } else {
      window.alert("Item added");
  
      // Update the products state with the newly added item
      setProducts([...products, { name, quantity }]);
      
      // Clear the input fields
      setitem({ name: "", quantity: "" });
    }
  };
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("/Get_items"); // Replace with your API endpoint
        const data = await response.json();
        if (data.error) {
          console.error("Error fetching data:", data.error);
        } else {
          // Update the products state with the fetched data
          const parsedData = data.map((item) => ({
            ...item,
            quantity: parseInt(item.quantity),
          }));
          setProducts(parsedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty array [] ensures that this effect runs only once when the component mounts
  
  return (
    <>
        <Container>
        <div>
      <h2>Product Form</h2>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            id="name"
            value={item.name}
            onChange={handleInput}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={item.quantity}
            onChange={handleInput}
            required
          />
        </label>
        <button type="submit" name="submit" id="submit" value="submit" onClick={Postdata}>Add Product</button>
      </form>

      <h3>Product List</h3>
<table>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {/* {products.map((product, index) => (
      <tr key={index}>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
      </tr>
    ))} */}
  </tbody>
</table>
{/* <Charts products={products} /> */}
<Charts key={JSON.stringify(products)} products={products} />

    </div>

        </Container>
    </>
    
  );
}

export default Dashboard; // Make sure to export the component with the correct name
