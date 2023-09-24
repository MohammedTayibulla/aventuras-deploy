import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import {API,baseURL} from '../../../../../api/apirequest';
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getData = async () => {
      try {
        
        let d = await API.get(`/api/all-destinations?populate=*`)

        let filter = d.data.data
        setData(filter)
        setLoading(false)

      } catch (err) {
        setLoading(true)
        console.log(err)

      }
    }
    getData();
  }, [])

  const fetchData = (value) => {
    if (!value || typeof value !== "string") {
      setResults([]);
      return;
    }
  
    const lowercaseValue = value.toLowerCase();
  
    const results = data.filter((user) => {
      return (
        user.attributes.name &&
        user.attributes.name.toLowerCase().includes(lowercaseValue)
      );
    });
  
    setResults(results);
    // console.log(results)
  };
  
  // const fetchData = (value) => {

  //   const results = data.filter((user) => {
  //     return (
  //       user.attributes.name &&
  //       user.attributes.name.toLowerCase().includes(value)
  //     );
  //   });
  //   setResults(results);

  //   console.log(results)
  // };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    if (value === "") { fetchData(0); return; }
  };



  return (
    <div className="search-content">
      <div className="searchBar">
        <label htmlFor="searchQueryInput">
          <input id="searchQueryInput"
            type="text"
            name="searchQueryInput"
            placeholder="Search by country or city.."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            autoComplete="off"
          />
        </label>

        <button role='button' type='button' id="searchQuerySubmit" name="searchQuerySubmit">
          <img className='img' loading="lazy" src={`https://admin.aventuras.co.in/uploads/searchicon_d982d6a32e_850a7584c2.png`} alt="searchicon" style={{ height: 30, width: 30 }} />
        </button>
      </div>
    </div>

  );
};
