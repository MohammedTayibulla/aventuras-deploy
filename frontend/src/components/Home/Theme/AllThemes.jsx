
import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Skeleton } from 'antd'
import "./Theme.scss";

import {API,baseURL} from "../../../api/apirequest";

const AllThemes = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const getData = async () => {
            try {

                let d = await API.get('/api/themes?populate=*')
                setData(d.data.data)
                setLoading(false)

            } catch (err) {
                setLoading(true)
                console.log(err)

            }
        }
        getData();
        
        window.scrollTo(0, 0);
    }, [])
    // console.log(data)


    return (
        <div className="section">
            <div className="banner">
                <div className="image">
                    <img src="https://admin.aventuras.co.in/uploads/adventure2_090937ed60.jpeg" alt="banner" />
                </div>
            </div>
            <div className="theme-container">
                {
                    loading ?
                        (
                            <Skeleton active />
                        )
                        :
                        (<>
                            <div className="section-title">
                                All Themes
                            </div>
                            <div className="card-container" style={{ flexWrap: 'wrap' }}>

                                {
                                    data
                                        // .sort((a, b) => a.id > b.id ? 1 : -1)
                                        .map((val) => {
                                            return (
                                                <>
                                                  
                                                  <Link to={`/single-theme/${val.id}`} >
                                                    <div className="card-content" key={val.id}>
                                                        <div className="card-image">
                                                            <img className='img' loading="lazy"
                                                                src={`${baseURL}${val?.attributes?.images?.data[0]?.attributes?.url}`}
                                                                alt={`${baseURL}${val?.attributes?.images?.data[0]?.attributes?.name}`}
                                                            />
                                                        </div>
                                                        <div className="card-overlay">
                                                            <div className="upper">
                                                                <div className="card-title">
                                                                    {val?.attributes?.title}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    </Link>
                                                </>

                                            )
                                        })

                                }

                            </div>


                        </>)}

            </div>
        </div>
    )
}

export default AllThemes


