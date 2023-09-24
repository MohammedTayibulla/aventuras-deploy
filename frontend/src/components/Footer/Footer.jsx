import React, { useState, useEffect } from 'react'
import "./Footer.scss";
import { Skeleton } from 'antd';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import {API,baseURL} from "../../api/apirequest"



const Footer = () => {
  const [international, setInternational] = useState([]);
  const [domestic, setDomestic] = useState([]);
  const [theme, setTheme] = useState([]);
  
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  
 
  // const filteredData = {
  //   domestic: destinations.data.filter(item => item.attributes.type === 'Domestic'),
  //   international: destinations.data.filter(item => item.attributes.type === 'International'),
  // };

  // // Set the state with the filtered data
  // useEffect(() => {
  //   setDomestic(filteredData.domestic);
  //   setInternational(filteredData.international);
  // }, []);


  
  const getData = async () => {

    try {
      const mydomestic = await API.get('/api/all-destinations?&filters[type][$eq]=Domestic')
        .then((res => {
          let names = res.data?.data?.map((v) => {
            // setDomestic(searches => Array.from(new Set([...searches, v?.attributes?.name])))
            setDomestic(searches =>
              Array.from(new Set([...searches, v].map((v) => JSON.stringify(v))))
                .map((string) => JSON.parse(string)))
          })
          
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

        const companyDetails = await API.get('/api/contact-details')
        .then((res => {
          setDetails(res.data.data[0])
          // let names = res.data?.data?.map((v) => {
          //   setDetails(searches =>
          //     Array.from(new Set([...searches, v].map((v) => JSON.stringify(v))))
          //       .map((string) => JSON.parse(string)))
          //   //setInternational(searches => Array.from(new Set([...searches, v?.attributes?.name])))
          // });
        }))
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(true)
      }
      }
  useEffect(() => {
getData();

  }, [])
// console.log(theme)

  const handleDestinationChange = (param) => {
    window.location.href = `/single-destination/${param}`;
    // console.log(key);

  };
  const handleThemeChange = (id) => {
    window.location.href = `/single-theme/${id}`;
    // console.log(key);

  };


  return (
    <div className="section">
       {loading ? (<>
          <Skeleton.Button active buttonShape block />
        </>) : (
          <>
      <div className="footer-container">
      

            <div className="top-container">
              <div className="left">
                <div className="company-name">
                {details?.attributes?.company_name}
                </div>
                <div className="contact">
                  <div className="column-1">

                    <div className="item">
                      <Link onClick={() => window.location = `tel:${details?.attributes?.company_mobile_number}`} className='link'>
                        <div className="img">
                          <img className='img' loading="lazy" src={`https://admin.aventuras.co.in/uploads/Phone_1faa585069_68c129f793.png`} alt="phone" style={{ width: 20, height: 20 }} />
                        </div>
                        <div className="text">
                        {details?.attributes?.company_mobile_number}
                        </div>
                      </Link>
                    </div>

                    <div className="item">
                      <Link  className='link' onClick={() => window.location = 'mailto:info@aventuras.co.in'}>
                        <div className="img">
                       
                          <img className='img' loading="lazy" src={`https://admin.aventuras.co.in/uploads/email_801b260b6d_d66e713080.png`} alt='email' style={{ width: 20, height: 20 }} />
                        </div>
                        <div className="text">
                        {details?.attributes?.company_email}
                        </div>
                      </Link>
                    </div>
                    <div className="item">
                    <Link to={details?.attributes?.google_reviews} className='link' target='_blank'>
                          <div className="img">
                        <img className='img' loading="lazy" src={`https://admin.aventuras.co.in/uploads/greviews_a38e2b283f.png`} alt='email' style={{ width: 20, height: 20,padding:"2px" }} />
                       
                         </div>
                        <div className="text" >
                        Google Reviews
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="column-2">

                    <div className="item">
                      <Link to={details?.attributes?.facebook} className='link' target='_blank'>
                        <div className="img">
                          <img className='img' loading="lazy" 
                          src={`https://admin.aventuras.co.in/uploads/facebook_f8b93244f5_4a3d19d55c.png`} alt="fb" 
                          style={{ width: 20, height: 20 }} />
                        </div>
                        <div className="text">
                        {/* {details?.attributes?.facebook} */}
                        Facebook
                        </div>
                      </Link>
                    </div>

                    <div className="item">
                      <Link to={details?.attributes?.instagram} className='link' target='_blank'>
                        <div className="img">
                          <img className='img' loading="lazy" 
                          src={`https://admin.aventuras.co.in/uploads/insta_6e010a4bb9_61fd6232ab.png`} alt="insta" 
                          style={{ width: 20, height: 20 }} />
                        </div>
                        <div className="text">
                        {/* {details?.attributes?.instagram} */}
                        Instagram
                        </div>
                      </Link>
                    </div>
                  
                  </div>
                </div>

                <div className="payment">
                  <div className="title">
                    We Accept
                  </div>
                  <div className="brand-images">
                    <div className="image">
                      <img className='img' loading="lazy" 
                      src={`https://admin.aventuras.co.in/uploads/visa_1ba74cbd5c_1646fde924.png`} alt="visa" 
                       />
                    </div>
                    <div className="image">
                      <img className='img' loading="lazy" 
                      src={`https://admin.aventuras.co.in/uploads/paytm_bb3a315994_fa654750ea.png`}
                       alt="paytm"  />
                    </div>
                    <div className="image">
                      <img className='img' loading="lazy" 
                      src={`https://admin.aventuras.co.in/uploads/upi_7de61a326f_a7bc7e3ff4.png`} alt="upi" />
                    </div>
                    <div className="image">
                      <img className='img' loading="lazy" 
                      src={`https://admin.aventuras.co.in/uploads/gpay_0e8ebcf61e_2cc231250e.png`} alt="gpay" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="right">

                <form className="form">
                  <div className="text">
                    Get our free newsletter
                  </div>
                  <div className="input">

                    <label htmlFor="inputtext">
                      <input type="text" id='inputtext' placeholder='Enter your email address' />
                    </label>
                    <button role='button' type='button'>SUBSCRIBE</button>
                  </div>

                </form>

                <div className="footer-links">

                  <div className="left-col">
                  <div className="column">
                    <div className="heading">DOMESTIC</div>
                    <ul className='lists'>
                      

                    {domestic.map((v) => {

return (
  <>
   <li className='list-item' > <NavLink to={`/single-destination/${v?.attributes?.name}`} key={v.id} onClick={() => { handleDestinationChange(v?.attributes?.name) }}>{v?.attributes?.name}</NavLink >
   </li></>
)
})}
                    </ul>
                  </div>

                  <div className="column">
                    <div className="heading">INTERNATIONAL</div>
                    <ul className='lists'>

                   {international.map((v) => {

                              return (
                                <>
                                 <li className='list-item' > <NavLink to={`/single-destination/${v?.attributes?.name}`} key={v.id} onClick={() => { handleDestinationChange(v?.attributes?.name) }}>{v?.attributes?.name}</NavLink >
                                 </li></>
                              )
                            })}

                    </ul>
                  </div>
                  </div>

                  <div className="right-col">

                  <div className="column">
                    <div className="heading">IMPORTANT LINKS</div>
                    <ul className='lists'>

                      <li className="list-item"> <Link to='/'> HOME</Link></li>
                      {/* <li className="list-item"> <Link to='/group-tour' target='_blank'> GROUP TOURS</Link></li> */}
                      {/* <li className="list-item"> <Link to='/flight'> FLIGHT</Link></li> */}
                      
                      <li className="list-item"> <Link to='/about-us'> About Us</Link></li>

                      <li className="list-item"> <Link to='/contact-us'> CONTACT US</Link></li>
                      <li className="list-item"> <Link to='/disclaimer'> DISCLAIMER</Link></li>
                    
                      <li className="list-item"> <Link to='/privacy-policy'> PRIVACY POLICY</Link></li>
                      <li className="list-item"> <Link to='/terms-and-condition'> TERMS AND CONDITION</Link></li>
                      <li className="list-item"> <Link to='/cancelation-policy'> CANCELLATION POLICY</Link></li>
                    

                    </ul>
                  </div>

                  <div className="column">
                    <div className="heading">THEMES</div>
                    <ul className='lists'>

                    {theme.map((v) => {

return (
  <>
   <li className='list-item' ><NavLink to={`/single-theme/${v.id}`} key={v.id} className='location' onClick={() => { handleThemeChange(v.id) }}>{v?.attributes?.title}</NavLink>
   </li></>
)
})}

                    </ul>
                  </div>
                  </div>
                </div>


              </div>

            </div>

            <div className="bottom-container">
              <div className="text">&copy; 2023 &nbsp;
              <span><Link to='/'> AVENTURAS </Link></span>
              &nbsp;All Rights Reserved.
            </div>
            </div>
      </div>
          </>)}
    </div>
  )
}

export default Footer
