
import React, { useEffect, useState } from 'react';
import axios from "axios"

const Payment = () => {
    const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Make a GET request to your backend API
    fetch('http://localhost:4000/payment/sample') // Assuming this is the correct endpoint
      .then((response) => response.json())
      .then((data) => {
        setHtmlContent(data.html);
        console.log(htmlContent)
      })
      .catch((error) => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);

  // Assuming this code is in a React component
  const [user, setUser] = useState({
    myname: '',
    myemail: '',
  });

  const [amount,setAmount]=useState(0)
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setAmount({
         // Spread the existing user object to retain its other properties
        [name]: value, // Update the specified property
      });
  };
  console.log(amount)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = amount
    localStorage.setItem("data",JSON.stringify(amount))
  
    try {
      const response = await fetch('http://localhost:4000/payment/initiate_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response) {
        const data = await response.json();
        console.log('Response from server:', data);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
// const handleSubmit1 = async (e) => {
//     e.preventDefault();
//     const formData = user
//     localStorage.setItem("data",JSON.stringify(user))
  
//     try {
//       const response = await fetch('http://localhost:4000/payment/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Response from server:', data);
//       } else {
//         console.error('Error submitting form');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  const alertFunction=()=>{
    
    const data1=localStorage.getItem("data")
    const parsedData = JSON.parse(data1);

    // Get the username
    const username = parsedData.amount;
    
    // Now, 'username' contains the value "a" from your local storage data
    console.log(username);
  }
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} ></div>
      <form onSubmit={handleSubmit}>
            <label for="amount">Enter Amount</label>
            <input type="number" name="amount" id="amount" onChange={handleChange}/>
   
            <button type="submit" name="submit_form">Pay Now</button>
        </form>

     
    </div>
  )
}

export default Payment