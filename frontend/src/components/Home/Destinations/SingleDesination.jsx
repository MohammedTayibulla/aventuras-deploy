import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import "../Packages/Packages.scss";
import "./SingleDestination.scss";
import {API,baseURL} from '../../../api/apirequest';

import { Carousel, Skeleton } from 'antd'
const SingleDestination = () => {
    let { dname } = useParams();

    const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [packages, setPackages] = useState([])
    const [error,setError]=useState(false)
    const [bgimage,setBgimage]=useState([])

    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {

            try {

                // let d = await API(`/all-destinations/${name}?populate=deep`)
               
               let d = await API(`/api/all-destinations?populate=deep&filters[name][$containsi]=${dname}`) 
                setValue(d.data.data)
               
                let filterData = d.data.data[0].attributes.all_package.data.map((v) => {
                    return v;
                });
                setPackages(filterData)

                let images=d.data.data[0].attributes.images.data.map((v) => {
                    return v;
                });
                setBgimage(images)


                setLoading(false)

            } catch (err) {
                console.log(err)
                setLoading(false)
                setError(true)

            }
        }
        getData();
        
        window.scrollTo(0, 0);
    }, [])
  

    // image data



    return (
        <>
            <div className="single-destination-section">
 <div className="banner">
                <div className="image">
                
                <Carousel effect="fade"
                        autoplay
                        dotPosition="bottom"
                        dots={false}
                        pauseOnHover={false}
                        autoplaySpeed={2500}
                        pauseOnFocus={false}

                      >

                {bgimage.map((v)=>{
                    return(
                        <>
                        <img src={`${baseURL}${v?.attributes?.url}`} alt="" />
                        </>
                    )
                })}
                      </Carousel>
                    {/* <img src="https://www.esikkimtourism.in/wp-content/uploads/2018/10/gangtok-bnnr.jpg" alt="banner" /> */}
                </div>
            </div>
                <div className="single-destination-container">
                    {
                        loading ?
                            (
                                <Skeleton active />
                            )
                            :
                            (<> {error ?(<><div className="section-title">
                            no destination found
                         </div></>):
                            (<>
                               

                           
                                    {
                                   packages.length===0 ?
                                    (<><div className="section-title">
                                    no packages found
                                 </div></>
                                     )
                                    :
                                    (<>
                                    
                                    
                                    <div className="section-title">
                                   {value[0]?.attributes?.name}
                                 </div>
                                 <div className="card-container">
                                    {
                                        packages
                                            .sort((a, b) => a.id > b.id ? 1 : -1)
                                            // .filter((item, index) => index < 8)

                                            .map((val) => {
                                                return (

                                                    <>
                                                        {val?.attributes? <>
                                                            <Link to={`/single-package/${val?.attributes?.package_id}`} >
                                                            <div className="card-content " key={val.id}>
                                                                    {
                                                                        val?.attributes?.package_images?.data.length>1
                                                                        ?
                                                                        (<div className="card-image">
                                                                        <img className='img' loading="lazy"
                                                                            src={`${baseURL}${val?.attributes?.package_images?.data.slice(0,1)?.map((v) => {
                                                                                return v.attributes?.url
                                                                            })}`}
                                                                            // alt="2"
                                                                            alt={`${baseURL}${val?.attributes?.package_images?.data.slice(0,1)?.map((v) => {
                                                                                return v.attributes?.name
                                                                            })}`}
                                                                        />
                                                                    </div>)
                                                                        :
                                                                        (<div className="card-image">
                                                                        <img className='img' loading="lazy"
                                                                            src={`${baseURL}${val?.attributes?.package_images?.data?.map((v) => {
                                                                                return v.attributes?.url
                                                                            })}`}
                                                                            alt={`${baseURL}${val?.attributes?.package_images?.data?.map((v) => {
                                                                                    return v.attributes?.name
                                                                                })}`}
                                                                        />
                                                                    </div>)

                                                                    }
                                                                    
                                                                    <div className="card-overlay">
                                                                        <div className="upper">
                                                                            <div className="card-title">
                                                                                {val?.attributes?.name}
                                                                            </div>
                                                                            <div className="card-package">
                                                                                {/* {val?.attributes?.package_durations?.data?.map((v) => {
                                                                                    return v.attributes?.duration
                                                                                })} */}
                                                                                 {(val?.attributes?.package_nights)===0?
                                                                                <>
                                                                             {`${(val?.attributes?.package_nights)+1} Day`}
                                                                             </>:
<>
                                                                                 {(val?.attributes?.package_nights)===1?
                                                                                <>
                                                                                {`${(val?.attributes?.package_nights)+1} Days / ${val?.attributes?.package_nights} Night`} 
                                                                                </>:                                                                           
                                                                             <> 
                                                                             {`${(val?.attributes?.package_nights)+1} Days / ${val?.attributes?.package_nights} Nights`}
                                                                             </>
                                                                            }
                                                                            </>}
                                                                                {/* {val?.attributes?.package_days} days/ {val?.attributes?.package_nights} nights */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="card-package-id">
                                                                            Package ID: {val?.attributes?.package_id}
                                                                        </div>
                                                                    </div>

                                                                    <div class="middle">
                                                                        <div className="text">
                                                                            <button className="form-button">click to enquiry</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </> : null}
                                                    </>



                                                )
                                            })

                                    }

                                </div>
                                </>)
                                   
                                }
                                </>)}
                                


                            </>)
                    }
                </div>

            </div>

        </>
    )
}

export default SingleDestination;
