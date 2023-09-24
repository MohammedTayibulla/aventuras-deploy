import React, { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "./logo.svg";
import "./App.css";
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {API,baseURL} from "./api/apirequest";

// common components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";

import Footer from "./components/Footer/Footer";
import BottomMenu from "./components/Footer/BottomMenu";
import Scrolltop from "./components/Footer/Scrolltop";


import AllPackages from "./components/Home/Packages/AllPackages";
import SinglePackages from "./components/Home/Packages/SinglePackages";

import AllDestinations from "./components/Home/Destinations/AllDestinations";
import SingleDestination from "./components/Home/Destinations/SingleDesination";

import AllThemes from "./components/Home/Theme/AllThemes";
import SingleTheme from "./components/Home/Theme/SingleTheme";

import Multiplegrouptour from "./components/Grouptour/MultiplegroupTour";
import Singlegrouptour from "./components/Grouptour/Singlegrouptour";


import PayNow from "./components/PayNow/PayNow";
import Flight from "./components/Flight/Flight";
import Contact from "./components/ContactUs/Contact";


import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";

import Dashboard from "./components/Admin/Dashboard/Dashboard";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

import NotFound from "./components/Home/NotFound";
import Protected from "./components/Auth/Protected";
import Disclaimer from "./components/Policies/Disclaimer";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import CancelationPolicy from "./components/Policies/CancelationPolicy";
import TermsAndCondition from "./components/Policies/TermsAndCondition";
import AboutUs from "./components/AboutUs/AboutUs";
import C1 from "./components/PayNow/C1";
import Payment from "./components/PayNow/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="/admin/dashboard"
            element={
              <Protected>
                <AdminRoutes />
              </Protected>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/all-destinations" element={<AllDestinations />} />
          <Route
            path="/single-destination/:dname"
            element={<SingleDestination />}
          />

          <Route path="/all-packages" element={<AllPackages />} />
          <Route
            path="/single-package/:package_id"
            element={<SinglePackages />}
          />

          <Route path="/group-tour" element={<Multiplegrouptour />} />
          <Route
            path="/single-group-tour/:package_id"
            element={<Singlegrouptour />}
            />
        

          <Route path="/all-themes" element={<AllThemes />} />
          <Route path="/single-theme/:id" element={<SingleTheme />} />

          <Route path="/flight" element={<Flight />} />
          <Route path="/pay-now" element={<PayNow />} />
          
          <Route path="/payment" element={<Payment />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancelation-policy" element={<CancelationPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
            
        <Footer />

        <BottomMenu
          className="bottomMenu"
          position="sticky"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        />

        <Scrolltop />

        <WhatsAppWidget
          phoneNo="917033323577"
          position="right"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={false}
          autoOpenTimer={5000}
          messageBox={true}
          messageBoxTxt="Hi Aventuras team! 
          I need assistance for planning my travel."
          iconSize="40"
          iconColor="white"
          iconBgColor="rgb(79, 206, 93)"
          headerIcon="https://admin.aventuras.co.in/uploads/logo_368a3d4788_7c8d3b0684.png"
          headerIconColor="pink"
          headerTxtColor="black"
          headerBgColor="rgb(79, 206, 93)"
          headerTitle="Aventuras"
          headerCaption="Online"
          bodyBgColor="#eee"
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor="#fff"
          placeholder="Type a message.."
          btnBgColor="rgb(79, 206, 93"
          btnTxt="Start Chat"
          btnTxtColor="white"
        />
      </BrowserRouter>
    </>
  );
}

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default App;
