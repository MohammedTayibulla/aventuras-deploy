import React,{useState} from 'react';

const FAntTable = () => {
    const response={
        "meta": {
          "count": 17,
          "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BLR&destinationLocationCode=MAA&departureDate=2023-06-24&returnDate=2023-06-24&adults=1&currencyCode=INR&max=250"
          }
        },
        "data": [
          {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-06-24",
            "lastTicketingDateTime": "2023-06-24",
            "numberOfBookableSeats": 8,
            "itineraries": [
              {
                "duration": "PT8H",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "at": "2023-06-24T09:15:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T11:30:00"
                    },
                    "carrierCode": "AI",
                    "number": "604",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H15M",
                    "id": "1",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T15:15:00"
                    },
                    "arrival": {
                      "iataCode": "MAA",
                      "terminal": "1",
                      "at": "2023-06-24T17:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "572",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H",
                    "id": "2",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT10H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "MAA",
                      "terminal": "1",
                      "at": "2023-06-24T21:40:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T23:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "574",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "25",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-25T06:45:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "at": "2023-06-25T08:30:00"
                    },
                    "carrierCode": "AI",
                    "number": "603",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H45M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "17088.00",
              "base": "14306.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "17088.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "17088.00",
                  "base": "14306.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "1",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "25",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-06-24",
            "lastTicketingDateTime": "2023-06-24",
            "numberOfBookableSeats": 5,
            "itineraries": [
              {
                "duration": "PT10H30M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "at": "2023-06-24T06:45:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T08:35:00"
                    },
                    "carrierCode": "AI",
                    "number": "640",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H50M",
                    "id": "11",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T15:15:00"
                    },
                    "arrival": {
                      "iataCode": "MAA",
                      "terminal": "1",
                      "at": "2023-06-24T17:15:00"
                    },
                    "carrierCode": "AI",
                    "number": "572",
                    "aircraft": {
                      "code": "32A"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H",
                    "id": "12",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT10H50M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "MAA",
                      "terminal": "1",
                      "at": "2023-06-24T21:40:00"
                    },
                    "arrival": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-24T23:50:00"
                    },
                    "carrierCode": "AI",
                    "number": "574",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H10M",
                    "id": "25",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-25T06:45:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "at": "2023-06-25T08:30:00"
                    },
                    "carrierCode": "AI",
                    "number": "603",
                    "aircraft": {
                      "code": "320"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H45M",
                    "id": "26",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "17088.00",
              "base": "14306.00",
              "fees": [
                {
                  "amount": "0.00",
                  "type": "SUPPLIER"
                },
                {
                  "amount": "0.00",
                  "type": "TICKETING"
                }
              ],
              "grandTotal": "17088.00"
            },
            "pricingOptions": {
              "fareType": [
                "PUBLISHED"
              ],
              "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
              "AI"
            ],
            "travelerPricings": [
              {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                  "currency": "INR",
                  "total": "17088.00",
                  "base": "14306.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "11",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "12",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "25",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "26",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  }
                ]
              }
            ]
          } ],
          "dictionaries": {
            "locations": {
              "BOM": {
                "cityCode": "BOM",
                "countryCode": "IN"
              },
              "IXB": {
                "cityCode": "IXB",
                "countryCode": "IN"
              },
              "BLR": {
                "cityCode": "BLR",
                "countryCode": "IN"
              },
              "DEL": {
                "cityCode": "DEL",
                "countryCode": "IN"
              },
              "MAA": {
                "cityCode": "MAA",
                "countryCode": "IN"
              }
            },
            "aircraft": {
              "319": "AIRBUS A319",
              "320": "AIRBUS A320",
              "321": "AIRBUS A321",
              "737": "BOEING 737 ALL SERIES PASSENGER",
              "32A": "AIRBUS A320 (SHARKLETS)",
              "32N": "AIRBUS A320NEO"
            },
            "currencies": {
              "INR": "INDIAN RUPEE"
            },
            "carriers": {
              "SG": "SPICEJET",
              "AI": "AIR INDIA"
            }
          }
        }
  const { data, dictionaries } = response;

  const getCityName = (iataCode) => {
    return dictionaries.locations[iataCode].cityCode;
  };

  const getAircraftName = (code) => {
    return dictionaries.aircraft[code];
  };

  const getCarrierName = (code) => {
    return dictionaries.carriers[code];
  };
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (flightId) => {
    const newExpandedRows = [...expandedRows];
    const index = newExpandedRows.indexOf(flightId);
    if (index > -1) {
      newExpandedRows.splice(index, 1);
    } else {
      newExpandedRows.push(flightId);
    }
    setExpandedRows(newExpandedRows);
  };

  const isRowExpanded = (flightId) => {
    return expandedRows.includes(flightId);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Aircraft</th>
          <th>Carrier</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {data.map((flight) => (
          <React.Fragment key={flight.id}>
            <tr onClick={() => toggleRow(flight.id)}>
            <td>{flight.itineraries[0].segments[0].carrierCode + flight.itineraries[0].segments[0].number}</td>
            <td>{getCityName(flight.itineraries[0].segments[0].departure.iataCode)}</td>
            <td>{getCityName(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode)}</td>
            <td>{getAircraftName(flight.itineraries[0].segments[0].aircraft.code)}</td>
            <td>{getCarrierName(flight.validatingAirlineCodes[0])}</td>
            <td>{flight.itineraries[0].duration}</td>
            <td>{flight.price.total} {flight.price.currency}</td>
            </tr>
            {isRowExpanded(flight.id) && (
              <tr>
                <td colSpan="7">
                  <div>
                    {/* Additional details or content for the expanded row */}
                    Duration: {flight.itineraries[0].duration}
                    {/* ... */}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
      ))}
      </tbody>
    </table>
  );
};

export default FAntTable;
