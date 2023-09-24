import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Collapse,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FlightSearch1() {


  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [currencyCode, setCurrencyCode] = useState('INR');
  const [maxPrice, setMaxPrice] = useState('');
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
const DEMO_URL="https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BLR&destinationLocationCode=MAA&departureDate=2023-06-27&returnDate=2023-06-27&adults=1&children=1&infants=1&travelClass=ECONOMY&includedAirlineCodes=AI&excludedAirlineCodes=UK&nonStop=true&currencyCode=INR&maxPrice=200000&max=250"
    const baseUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers';
    const params = new URLSearchParams({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      returnDate: returnDate,
      adults: adults,
      currencyCode: currencyCode,
      max: maxPrice,
    });
    const url = `${baseUrl}?${params.toString()}`;

    const accessToken = 'CtyqVLouMXIFLflvZ1pupmAb2f61'; // Replace with your Amadeus access token

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFlightData(response.data);
      console.log(response.data)
      setError(null);
    } catch (error) {
      setFlightData(null);
      setError(error);
    }
  };

  return (
    <div>
         <form onSubmit={handleSubmit}>
    <label htmlFor="origin">Origin:</label>
    <select id="origin" name="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
      <option value="BLR">Bengaluru (BLR)</option>
      <option value="HYD">Hyderabad (HYD)</option>

      <option value="BOM">Mumbai (BOM)</option>
      <option value="IXB">Bagdogra (IXB)</option>
      <option value="DEL">Delhi (DEL)</option>
      <option value="MAA">Chennai (MAA)</option>
    </select>

    <br />

    <label htmlFor="destination">Destination:</label>
    <select id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
      <option value="BLR">Bengaluru (BLR)</option>
      <option value="BOM">Mumbai (BOM)</option>
      <option value="HYD">Hyderabad (HYD)</option>
      <option value="DEL">Delhi (DEL)</option>
      <option value="MAA">Chennai (MAA)</option>
      <option value="IXB">Bagdogra (IXB)</option>
    </select>

    <br />

    <label htmlFor="departureDate">Departure Date:</label>
    <input type="date" id="departureDate" name="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />

    <br />

    <label htmlFor="returnDate">Return Date:</label>
    <input type="date" id="returnDate" name="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />

    <br />

    <label htmlFor="adults">Adults:</label>
    <input type="number" id="adults" name="adults" min="1" max="9" value={adults} onChange={(e) => setAdults(parseInt(e.target.value))} />

    <br />

    <label htmlFor="currencyCode">Currency:</label>
    <select id="currencyCode" name="currencyCode" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
      <option value="INR">Indian Rupee (INR)</option>
      <option value="USD">United states Dollar</option>
      {/* Add more currency options if needed */}
    </select>

    <br />

    <label htmlFor="maxPrice">Max Price:</label>
    <input type="number" id="maxPrice" name="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
  
    <br />

    <input type="submit" value="Search" />
  </form>

      {/* {flightData && <FlightTable flightData={flightData} />}
      {error && <p>Error occurred while fetching flight data.</p>} */}
      {flightData && <FlightTable flightData={flightData} />}
      {error && <p>Error occurred while fetching flight data.</p>}
    </div>
  );
}

function FlightTable({ flightData }) {
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Flight Number</th>
            <th style={tableHeaderStyle}>Departure</th>
            <th style={tableHeaderStyle}>Arrival</th>
            <th style={tableHeaderStyle}>Duration</th>

            <th style={tableHeaderStyle}>Price starting from ₹ </th>
            <th style={tableHeaderStyle}>Seats Available</th>
          </tr>
        </thead>
        <tbody>
          {flightData.data.map((flight) => (
            <tr key={flight.id}>
              <td style={tableCellStyle}>{flight.itineraries[0].segments[0].number}</td>
              <td style={tableCellStyle}>{flight.itineraries[0].segments[0].departure.iataCode}</td>
              <td style={tableCellStyle}>
                {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}
              </td>
              <td style={tableCellStyle}>{flight.itineraries[0].duration}</td>
              <td style={tableCellStyle}>{flight.price.base} /-</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

// const FlightTable = ({ flightData }) => {
//     const [expanded, setExpanded] = useState(false);
  
//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
  
//     return (
//       <Card>
//         <CardHeader
//         //   title={`Flight ID: ${flight.id}`}
//         //   subheader={`Price: ${flight.price.currency} ${flight.price.total}`}
//           action={
//             <IconButton
//               aria-expanded={expanded}
//               aria-label="show more"
//               onClick={handleExpandClick}
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           }
//         />
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             {flightData.data.itineraries.map((itinerary, index) => (
//               <div key={index}>
//                 <Typography variant="h6">Itinerary {index + 1}</Typography>
//                 {itinerary.segments.map((segment, segmentIndex) => (
//                   <div key={segmentIndex}>
//                     <Typography variant="body1">
//                       Departure: {segment.departure.iataCode}
//                     </Typography>
//                     <Typography variant="body1">
//                       Arrival: {segment.arrival.iataCode}
//                     </Typography>
//                     <Typography variant="body1">
//                       Duration: {segment.duration}
//                     </Typography>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </CardContent>
//         </Collapse>
//       </Card>
//     );
//   };
  
  const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',
  };
  
  const tableCellStyle = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
  };
  

export default FlightSearch1;
