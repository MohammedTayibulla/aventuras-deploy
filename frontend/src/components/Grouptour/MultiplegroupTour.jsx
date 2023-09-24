import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import "./grouptour.scss";
import "./Sample.scss";
import {API,baseURL} from "../../api/apirequest"
import { Skeleton } from 'antd'

const MultiplegroupTour = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const getData = async () => {
            try {

                let d = await API.get('/api/group-tours?populate=deep')
                setData(d.data.data)
                // console.log(d.data.data)
                setLoading(false)

            } catch (err) {
                setLoading(true)
                console.log(err)

            }
        }
        getData();
        
        window.scrollTo(0, 0);
    }, [])
    console.table(data)


    return (
        // <div className="group-page-container">
        //         <div className="pages">
        // <h1 className="page-heading">Group tour page coming soon...</h1>


        //     </div> 
        //        </div>
        <div className="section">
            <div className="banner">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="banner" />
                </div>
            </div>
            <div className="package-container">
                {
                    loading ?
                        (
                            <Skeleton active />
                        )
                        :
                        (<>


                            <div className="section-title">
                                Group Tour Packages
                            </div>

                            <div className="card-container" style={{ flexWrap: 'wrap' }}>
                                {
                                    data
                                        .sort((a, b) => a.id > b.id ? 1 : -1)
                                        // .filter((item, index) => index < 8)

                                        .map((val) => {
                                            return (

                                                <Link to={`/single-group-tour/${val?.attributes?.package_id}`} >
                                                    <div className="card-content " key={val.id}
                                                    >
                                                             <div className="card-image">
                                                            {
                                                                        val?.attributes?.package_images?.data.length > 1
                                                                            ?
                                                                            (<div className="card-image">
                                                                                <img className='img' loading="lazy"
                                                                                    src={`${baseURL}${val?.attributes?.package_images?.data?.slice(0, 1)?.map((v) => {
                                                                                        return v.attributes?.url
                                                                                    })}`}
                                                                                    // alt="2"
                                                                                    alt={`${baseURL}${val?.attributes?.package_images?.data?.slice(0, 1)?.map((v) => {
                                                                                        return v.attributes?.name
                                                                                    })}`}
                                                                                />
                                                                            </div>)
                                                                            :
                                                                            (<div className="card-image">
                                                                                <img className='img' loading="lazy"
                                                                                    src={`${baseURL}${val?.attributes?.package_images?.data?.slice(0, 1)?.map((v) => {
                                                                                        return v.attributes?.url
                                                                                    })}`}
                                                                                    alt={`${baseURL}${val?.attributes?.package_images?.data?.slice(0, 1)?.map((v) => {
                                                                                        return v.attributes?.name
                                                                                    })}`}
                                                                                />
                                                                            </div>)

                                                                    }
                                                        </div>
                                                        <div className="card-overlay">
                                                            <div className="upper">
                                                                <div className="card-title">
                                                                    {val?.attributes?.name}
                                                                </div>
                                                                <div className="card-package">
                                                                {(val?.attributes?.Package_Nights)===0?
                                                                                <>
                                                                             {`${(val?.attributes?.Package_Nights)+1} Day`}
                                                                             </>:
<>
                                                                                 {(val?.attributes?.Package_Nights)===1?
                                                                                <>
                                                                                {`${(val?.attributes?.Package_Nights)+1} Days / ${val?.attributes?.Package_Nights} Night`} 
                                                                                </>:                                                                           
                                                                             <> 
                                                                             {`${(val?.attributes?.Package_Nights)+1} Days / ${val?.attributes?.Package_Nights} Nights`}
                                                                             </>
                                                                            }
                                                                            </>}
                                                                            </div>
                                                                {/* <div className="card-package">
                                                                    {`${val?.attributes?.Package_days} Days / ${val?.attributes?.Package_Nights} Nights`}
                                                                </div> */}
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

                                            )
                                        })

                                }
                            </div>
                        </>
                        )
                }
            </div>
        </div >
    )
}

export default MultiplegroupTour
