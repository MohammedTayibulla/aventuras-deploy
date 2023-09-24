import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { message} from 'antd';
import { notification } from 'antd';
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("Admin");
    navigate("/login");
    notification.success({
      message: 'Log Out Successful',
      // description: 'You have successfully logged in.',
      
      duration: 2, // Duration in seconds (adjust as needed)
    });
  }, [navigate]);

  return null;
};

export default Logout;