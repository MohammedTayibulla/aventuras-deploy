import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Dash = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "https://fibregrid.amxdrones.com/dronecount/projects/",
              {
                params: {
                  user_id: 17,
                },
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Auth: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNywibmFtZSI6ImRldmVsb3BlckBtYWlsLmNvbSIsImV4cCI6MTY4ODE3ODM0Nn0.WqLJB3AqKOQY69znATEqA7AHkZ-8B9BOm7m02Ppnj04",
                },
              }
            );
      
            if (response.status === 200) {
              const data = response.data;
              console.log(data);
            } else {
              throw new Error("Request failed");
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
  return (
    <div>Dash</div>
  )
}

export default Dash