import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {API,baseURL} from "../../api/apirequest"

import { Menu, Dropdown, Space, Skeleton } from 'antd';
import { CloseOutlined, MenuOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { ShopOutlined, HomeOutlined } from '@ant-design/icons'

import './Navbar.scss';
import "./RNav.css";
import { userData } from "../Auth/helper";




const Drop = () => {
  const [international, setInternational] = useState([]);
  const [domestic, setDomestic] = useState([]);
  const [theme, setTheme] = useState([]);

  const getData = async () => {

    try {
      const mydomestic = await API.get('/api/all-destinations?&filters[type][$eq]=Domestic')
        .then((res => {
          let names = res.data?.data?.map((v) => {
            // setDomestic(searches => Array.from(new Set([...searches, v?.attributes?.name])))
            setDomestic(searches =>
              Array.from(new Set([...searches, v].map((v) => JSON.stringify(v))))
                .map((string) => JSON.parse(string)))
          });
        }))



      const myinternational = await API.get('/api/all-destinations?&filters[type][$eq]=International')
        .then((res => {
          let names = res.data?.data?.map((v) => {
            setInternational(searches =>
              Array.from(new Set([...searches, v].map((v) => JSON.stringify(v))))
                .map((string) => JSON.parse(string)))
            //setInternational(searches => Array.from(new Set([...searches, v?.attributes?.name])))
          });
        }))

        const mythemes = await API.get('/api/themes')
        .then((res => {
          let names = res.data?.data?.map((v) => {
            setTheme(searches =>
              Array.from(new Set([...searches, v].map((v) => JSON.stringify(v))))
                .map((string) => JSON.parse(string)))
            //setInternational(searches => Array.from(new Set([...searches, v?.attributes?.name])))
          });
        }))

    } catch (err) {
      // console.log(err)
      setLoading(true)
    }
  }
  useEffect(() => {



    getData();

  }, [])
  
  const { username } = userData();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const [loading, setLoading] = useState(false);

  function refreshPage() {
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  }


  const handleDestinationChange = (param) => {
    window.location.href = `/single-destination/${param}`;
    // console.log(key);

  };
  const handleThemeChange = (id) => {
    window.location.href = `/single-theme/${id}`;
    // console.log(key);

  };

  return (


    <div className='navBar'>

      {
        loading ?
          (
            <Skeleton.Button active buttonShape block />
          )
          : (<>

            <div className="navbar-container">

              <div className="navbar-left">
                <Link to="/">
                  <div className="nav-logo">
                    <img className='img' loading="lazy"
                      src={`https://admin.aventuras.co.in/uploads/logo_368a3d4788_7c8d3b0684.png`}
                      alt="logo" />
                      
                  </div>
                </Link>
                <div className="navbar-heading">
                
              
                </div>
              </div>

              <div className="menuIcon" onClick={handleClick}>
                {clicked ?
                  <CloseOutlined />
                  :
                  <MenuOutlined />
                }

              </div>
              <ul className={clicked ? "menuList" : "menuList close"}>
                <div className="navbar-right">
                  <ul className="lists">

                    <li className="dropdownOne">
                      <Link to="/all-destinations">
                        <div className="dropbtn">Destinations<span className="arrowa"></span></div></Link>
                      <div className="dropdowncontent">

                        <li className="multidropdown">
                          <div className="multidropbtn location-heading">International</div>
                          <div className="multidropdowncontent">
                            {international.map((v) => {

                              return (
                                <>
                                  <NavLink to={`/single-destination/${v?.attributes?.name}`} key={v.id} className='location' onClick={() => { handleDestinationChange(v?.attributes?.name) }}>{v?.attributes?.name}</NavLink >
                                </>
                              )
                            })}


                            <Link to="/all-destinations" className="mybtn">explore more</Link>

                          </div>
                        </li>

                        <li className="multidropdown">
                          <div className="multidropbtn location-heading">Domestic</div>
                          <div className="multidropdowncontent">
                            {domestic.map((v) => {
                              return (
                                <>
                                  <NavLink to={`/single-destination/${v?.attributes?.name}`} key={v.id} className='location' onClick={() => { handleDestinationChange(v?.attributes?.name) }}>{v?.attributes?.name}</NavLink>
                                </>
                              )
                            })}
                           

                            <Link to="/all-destinations" className="mybtn">explore more</Link>

                          </div>
                        </li>


                      </div>
                    </li>

                    <li className="dropdownOne">
                      <Link to="/all-themes"><div className="dropbtn">Themes <span className="arrowa"></span></div></Link>

                      <div className="dropdowncontent">
                        <li className="multidropdown">
                        <div className="multidropbtn location-heading">Themes</div>
                          <div className="multidropdowncontent">
                          {theme.map((v) => {
                              return (
                                <>
                                  <NavLink to={`/single-theme/${v.id}`} key={v.id} className='location' onClick={() => { handleThemeChange(v.id) }}>{v?.attributes?.title}</NavLink>
                                </>
                              )
                            })}

                            <Link to="/all-themes" className="mybtn">explore more</Link>

                          </div>
                        </li>



                      </div>
                    </li>



                    {/* <li className="navitem highlight">
                      <div><Link to="/group-tour" target="_blank">Group Tours</Link></div>
                    </li> */}

                    {/* <li className="navitem">
                      <div><Link to="/flight">Flight</Link></div>
                    </li> */}

                    <li className="navitem">
                      <div><Link to="/pay-now">Pay Now</Link></div>
                    </li>

                    <li className="navitem">
                      <div><Link to="/about-us">About Us</Link></div>
                    </li>

                    <li className="navitem contact-button">
                      <div><Link to="/contact-us">Contact us</Link></div>
                    </li>
                    <li className="dropdownOne">
                      <Link to=""><div className="dropbtn"><Link to="/login">{username ? `Welcome ${username}`  : 'Login/Signup'}</Link></div></Link>
                          {username? <>
                            <div className="dropdowncontent">
                        <li className="multidropdown">
                          <div className="multidropdowncontent">
                          
                            {/* <Link className='location' onClick={() => (localStorage.removeItem("user"))}>Logout</Link> */}
                            <Link className='location' onClick={refreshPage}>Logout</Link>

                            {/* <Link to="/admin/dashboard" >Admin</Link>                                */}

                          </div>
                        </li>



                      </div>
                          </>
                          :
                          <>
                           <div className="dropdowncontent">
                        <li className="multidropdown">
                          <div className="multidropdowncontent">
                            <Link to="/register" className='location'>Sign Up</Link>
                            <Link to="/login" className='location'>Login</Link>
                            {/* <Link className='location' onClick={() => (localStorage.removeItem("user"))}>Logout</Link> */}
                            <Link className='location' onClick={refreshPage}>Logout</Link>

                            {/* <Link to="/admin/dashboard" >Admin</Link>                                */}

                          </div>
                        </li>



                      </div>
                          </>}
                     
                    </li>



                  </ul>

                </div>

              </ul>


            </div >
          </>
          )
      }

    </div >


  )
}


export default Drop



