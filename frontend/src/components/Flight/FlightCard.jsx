import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Card, Collapse, Space, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Text } = Typography;

function FlightCard() {

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

    const accessToken = 'tnw6XA7GTXBUlg26MlVXiBDnyYgO'; // Replace with your Amadeus access token

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setFlightData(response.data);
      console.log(response.data);
      setError(null);
    } catch (error) {
      setFlightData(null);
      setError(error);
    }
  };

  return (
    <div className="flight-card">
      <form onSubmit={handleSubmit} className="flight-search-form">
        <label htmlFor="origin">Origin:</label>
        <select
          id="origin"
          name="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="BLR">Bengaluru (BLR)</option>
          <option value="HYD">Hyderabad (HYD)</option>
          <option value="BOM">Mumbai (BOM)</option>
          <option value="DEL">Delhi (DEL)</option>
          <option value="MAA">Chennai (MAA)</option>
        </select>

        <br />

        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="BLR">Bengaluru (BLR)</option>
          <option value="BOM">Mumbai (BOM)</option>
          <option value="HYD">Hyderabad (HYD)</option>
          <option value="DEL">Delhi (DEL)</option>
          <option value="MAA">Chennai (MAA)</option>
        </select>

        <br />

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />

        <br />

        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          name="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <br />

        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          name="adults"
          min="1"
          max="9"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value))}
        />

        <br />

        <label htmlFor="currencyCode">Currency:</label>
        <select
          id="currencyCode"
          name="currencyCode"
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.target.value)}
        >
          <option value="INR">Indian Rupee (INR)</option>
          <option value="USD">United states Dollar</option>
          {/* Add more currency options if needed */}
        </select>

        <br />

        <label htmlFor="maxPrice">Max Results:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <br />

        <input type="submit" value="Search" className="search-button" />
      </form>

      {flightData && (
        <Collapse accordion className="flight-result-collapse">
          {flightData.data.map((flight) => (
            <Panel
              key={flight.id}
              header={`Flight Number: ${flight.itineraries[0].segments[0].number}`}
              extra={<CaretRightOutlined />}
              className="flight-panel"
            >
              <FlightDetails flight={flight} />
            </Panel>
          ))}
        </Collapse>
      )}

      {error && <p>Error occurred while fetching flight data.</p>}
    </div>
  );
}

function FlightDetails({ flight }) {
  return (
    <Space direction="vertical" className="flight-details-space">
      {flight.itineraries.map((itinerary, index) => (
        <div key={index} className="itinerary-container">
          <Text strong>Itinerary {index + 1}</Text>
          {itinerary.segments.map((segment, segmentIndex) => (
            <div key={segmentIndex} className="segment-container">
              <Text>Departure: {segment.departure.iataCode}</Text>
              <Text>Arrival: {segment.arrival.iataCode}</Text>
              <Text>Duration: {segment.duration}</Text>
            </div>
          ))}
        </div>
      ))}
    </Space>
  );
}

export default FlightCard;
