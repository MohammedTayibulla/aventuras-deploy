import React, { useState } from 'react'
import axios from "axios";
import "./PayNow.scss";
import {API,baseURL} from '../../api/apirequest';

import { message} from 'antd';
import { notification } from 'antd';
const PayNow = () => {
  const [data, setData] = useState({
    "user_name": "",
    "user_email": "",
    "remarks": "",
    "amount":""
   
});
const handleChange = (e) =>
    setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))



const handleSubmit = async (e) => {
    e.preventDefault();
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    
    if (userData && userData.jwt) {
      const authToken = userData.jwt;
    
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      };
    
    
    try {


        let ob = {
            data
        }
        const res = await API.post('/api/pay-nows', ob, config);
        notification.success({
          message: 'Enquiry Sent successfully!',
          // description: 'You have successfully logged in.',
          
          duration: 2, // Duration in seconds (adjust as needed)
        });
        // console.log(res.data)
        setData(null)


    }
    
    catch (error) {
        console.log(error)
        if(error.response.status==403){
          notification.error({
            message: 'Please Login to send Payments!',
            description: '',
            
            duration: 2, // Duration in seconds (adjust as needed)
          });
        }else{
          notification.error({
            message: 'Unable to send Enquiry!',
            description: 'Please fill all details to send enquiry',
            
            duration: 2, // Duration in seconds (adjust as needed)
          });
        }
       
    }
  }else{
    notification.info({
      message: 'Login to Pay Now!',
      // description: 'You have successfully logged in.',
      
      duration: 2, // Duration in seconds (adjust as needed)
    });
  }
    // console.log(data)
};
 
  return (
    <>
      <div className="pay-page-container">
    
        <div className="pay-pages">
          <div className="left">
          <div className="page-heading">Pay Now</div>
            <div id="paymentForm" className="formContainer">

            
              <div className="inputField">
              <label htmlFor="user_name">User Name </label>
              <input type="text" style={{ width: '250px' }} name="user_name" onChange={handleChange}/>
              </div> <div className="inputField">
              <label htmlFor="user_name">User Email</label>
              <input type="text" style={{ width: '250px' }} name="user_email" onChange={handleChange}/>
              </div>
              <div className="inputField">
              <label htmlFor="remarks">Remarks:</label>
           
              <textarea id="remarks" rows={4} cols={24} style={{ width: '250px' }} name="remarks" onChange={handleChange} />
  
              </div>
              <div className="inputField">
              <label htmlFor="amount">Amount</label>
              <input type="number" style={{ width: '250px' }} name="amount" onChange={handleChange}/>
              </div>
              <button className="form-button" onClick={handleSubmit}>Pay Now !</button>



                
            </div>
          </div>
          <div className="right">
            <div className="qr-image-container">
              <img src={`https://admin.aventuras.co.in/uploads/qr_code_con_x8n3fx_0c5aceaa23.png`} alt="sample qr" />

              <div className="text-content">
                <div className="headings">
                  Scan above QR for paying through UPI
                </div>
                <div className="para">(above is dummy qr)</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </>
  );
};



export default PayNow
