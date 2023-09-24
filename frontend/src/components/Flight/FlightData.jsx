import React, { useState } from 'react';

const iataCodes = {
  BLR: 'Bengaluru',
  HYD: 'Hyderabad',
  BOM: 'Mumbai',
  IXB: 'Bagdogra',
  DEL: 'Delhi',
  MAA: 'Chennai',
};

function FlightCard({ flight }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  };

  const getSourceDepartureTime = () => {
    const { segments } = flight.itineraries[0];
    return formatTime(segments[0].departure.at.split('T')[1]);
  };

  const getSourceArrivalTime = () => {
    const { segments } = flight.itineraries[0];
    return formatTime(segments[segments.length - 1].arrival.at.split('T')[1]);
  };

  return (
    <div>
      <div onClick={handleExpandClick}>
        <strong>Flight Number:</strong> {flight.itineraries[0].segments[0].number}
        <span>{expanded ? ' -' : ' +'}</span>
      </div>
      {expanded && (
        <div>
          <p>
            <strong>Airplane Number:</strong> {flight.itineraries[0].segments[0].number}
          </p>
          <p>
            <strong>Airplane Name:</strong> {flight.itineraries[0].segments[0].carrierCode}
          </p>
          <p>
            <strong>Duration:</strong> {flight.itineraries[0].duration}
          </p>
          <p>
            <strong>Source Departure:</strong> {getSourceDepartureTime()}
          </p>
          <p>
            <strong>Source Arrival:</strong> {getSourceArrivalTime()}
          </p>
          <p>
            <strong>Source:</strong> {iataCodes[flight.itineraries[0].segments[0].departure.iataCode]}
          </p>
          <p>
            <strong>Destination:</strong>{' '}
            {iataCodes[flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode]}
          </p>
        </div>
      )}
    </div>
  );
}

function FlightTable({ flightData }) {
  return (
    <div>
      {flightData.data.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}

  function FlightData() {
    const singleResponse={
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
            "id": "5",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-06-24",
            "lastTicketingDateTime": "2023-06-24",
            "numberOfBookableSeats": 1,
            "itineraries": [
              {
                "duration": "PT8H35M",
                "segments": [
                  {
                    "departure": {
                      "iataCode": "BLR",
                      "terminal": "1",
                      "at": "2023-06-24T06:10:00"
                    },
                    "arrival": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2023-06-24T08:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "804",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H45M",
                    "id": "13",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "DEL",
                      "terminal": "3",
                      "at": "2023-06-24T11:50:00"
                    },
                    "arrival": {
                      "iataCode": "MAA",
                      "terminal": "1",
                      "at": "2023-06-24T14:45:00"
                    },
                    "carrierCode": "AI",
                    "number": "554",
                    "aircraft": {
                      "code": "319"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT2H55M",
                    "id": "14",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              },
              {
                "duration": "PT13H30M",
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
                    "id": "23",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  },
                  {
                    "departure": {
                      "iataCode": "BOM",
                      "terminal": "2",
                      "at": "2023-06-25T09:30:00"
                    },
                    "arrival": {
                      "iataCode": "BLR",
                      "at": "2023-06-25T11:10:00"
                    },
                    "carrierCode": "AI",
                    "number": "639",
                    "aircraft": {
                      "code": "32N"
                    },
                    "operating": {
                      "carrierCode": "AI"
                    },
                    "duration": "PT1H40M",
                    "id": "24",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                  }
                ]
              }
            ],
            "price": {
              "currency": "INR",
              "total": "22058.00",
              "base": "19226.00",
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
              "grandTotal": "22058.00"
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
                  "total": "22058.00",
                  "base": "19226.00"
                },
                "fareDetailsBySegment": [
                  {
                    "segmentId": "13",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIP",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "14",
                    "cabin": "ECONOMY",
                    "fareBasis": "UIPFS",
                    "class": "U",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "23",
                    "cabin": "ECONOMY",
                    "fareBasis": "LIP",
                    "class": "L",
                    "includedCheckedBags": {
                      "weight": 25,
                      "weightUnit": "KG"
                    }
                  },
                  {
                    "segmentId": "24",
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
          }],
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
  
    return (
      <div>
        <FlightTable flightData={singleResponse} />
      </div>
    );
  }
  
  export default FlightData;