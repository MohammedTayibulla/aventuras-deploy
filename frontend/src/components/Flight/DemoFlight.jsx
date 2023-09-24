import React, { useEffect, useState } from 'react';
import moment from 'moment';
import FlightForm from './FlightForm';
import FlightSearch1 from './FlightSearch1';
import FlightCard from './FCard';
function FlightSearchResults() {
    const [flights, setFlights] = useState([]);
   
    const response2=[
        {
            "meta": {
              "count": 2,
              "links": {
                "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BLR&destinationLocationCode=HYD&departureDate=2023-06-16&returnDate=2023-06-19&adults=1&children=1&travelClass=ECONOMY&nonStop=false&currencyCode=INR&max=2"
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
                "lastTicketingDate": "2023-06-15",
                "lastTicketingDateTime": "2023-06-15",
                "numberOfBookableSeats": 9,
                "itineraries": [
                  {
                    "duration": "PT1H10M",
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "BLR",
                          "at": "2023-06-16T07:00:00"
                        },
                        "arrival": {
                          "iataCode": "HYD",
                          "at": "2023-06-16T08:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "897",
                        "aircraft": {
                          "code": "320"
                        },
                        "operating": {
                          "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  },
                  {
                    "duration": "PT1H5M",
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "HYD",
                          "at": "2023-06-19T08:50:00"
                        },
                        "arrival": {
                          "iataCode": "BLR",
                          "at": "2023-06-19T09:55:00"
                        },
                        "carrierCode": "UK",
                        "number": "898",
                        "aircraft": {
                          "code": "320"
                        },
                        "operating": {
                          "carrierCode": "UK"
                        },
                        "duration": "PT1H5M",
                        "id": "2",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  }
                ],
                "price": {
                  "currency": "INR",
                  "total": "14832.00",
                  "base": "9962.00",
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
                  "grandTotal": "14832.00"
                },
                "pricingOptions": {
                  "fareType": [
                    "PUBLISHED"
                  ],
                  "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                  "UK"
                ],
                "travelerPricings": [
                  {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                      "currency": "INR",
                      "total": "7416.00",
                      "base": "4981.00"
                    },
                    "fareDetailsBySegment": [
                      {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q",
                        "includedCheckedBags": {
                          "weight": 15,
                          "weightUnit": "KG"
                        }
                      },
                      {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q",
                        "includedCheckedBags": {
                          "weight": 15,
                          "weightUnit": "KG"
                        }
                      }
                    ]
                  },
                  {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "CHILD",
                    "price": {
                      "currency": "INR",
                      "total": "7416.00",
                      "base": "4981.00"
                    },
                    "fareDetailsBySegment": [
                      {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q"
                      },
                      {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q"
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
                "lastTicketingDate": "2023-06-15",
                "lastTicketingDateTime": "2023-06-15",
                "numberOfBookableSeats": 9,
                "itineraries": [
                  {
                    "duration": "PT1H10M",
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "BLR",
                          "at": "2023-06-16T07:00:00"
                        },
                        "arrival": {
                          "iataCode": "HYD",
                          "at": "2023-06-16T08:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "897",
                        "aircraft": {
                          "code": "320"
                        },
                        "operating": {
                          "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  },
                  {
                    "duration": "PT1H15M",
                    "segments": [
                      {
                        "departure": {
                          "iataCode": "HYD",
                          "at": "2023-06-19T20:20:00"
                        },
                        "arrival": {
                          "iataCode": "BLR",
                          "at": "2023-06-19T21:35:00"
                        },
                        "carrierCode": "UK",
                        "number": "894",
                        "aircraft": {
                          "code": "320"
                        },
                        "operating": {
                          "carrierCode": "UK"
                        },
                        "duration": "PT1H15M",
                        "id": "3",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                      }
                    ]
                  }
                ],
                "price": {
                  "currency": "INR",
                  "total": "14832.00",
                  "base": "9962.00",
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
                  "grandTotal": "14832.00"
                },
                "pricingOptions": {
                  "fareType": [
                    "PUBLISHED"
                  ],
                  "includedCheckedBagsOnly": false
                },
                "validatingAirlineCodes": [
                  "UK"
                ],
                "travelerPricings": [
                  {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                      "currency": "INR",
                      "total": "7416.00",
                      "base": "4981.00"
                    },
                    "fareDetailsBySegment": [
                      {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q",
                        "includedCheckedBags": {
                          "weight": 15,
                          "weightUnit": "KG"
                        }
                      },
                      {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q",
                        "includedCheckedBags": {
                          "weight": 15,
                          "weightUnit": "KG"
                        }
                      }
                    ]
                  },
                  {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "CHILD",
                    "price": {
                      "currency": "INR",
                      "total": "7416.00",
                      "base": "4981.00"
                    },
                    "fareDetailsBySegment": [
                      {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q"
                      },
                      {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "Q0GRPRYS",
                        "brandedFare": "ECOYS",
                        "class": "Q"
                      }
                    ]
                  }
                ]
              }
            ],
            "dictionaries": {
              "locations": {
                "HYD": {
                  "cityCode": "HYD",
                  "countryCode": "IN"
                },
                "BLR": {
                  "cityCode": "BLR",
                  "countryCode": "IN"
                }
              },
              "aircraft": {
                "320": "AIRBUS A320"
              },
              "currencies": {
                "INR": "INDIAN RUPEE"
              },
              "carriers": {
                "UK": "VISTARA"
              }
            }
          }
        ]

   

function convertToIndianTimezone(dateTime) {
  return moment.utc(dateTime).utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
}



//       useEffect(()=>{
// setFlights([{
//     "type": "flight-offer",
//     "id": "1",
//     "source": "GDS",
//     "instantTicketingRequired": false,
//     "nonHomogeneous": false,
//     "oneWay": false,
//     "lastTicketingDate": "2023-06-15",
//     "lastTicketingDateTime": "2023-06-15",
//     "numberOfBookableSeats": 9,
//     "itineraries": [
//       {
//         "duration": "PT1H10M",
//         "segments": [
//           {
//             "departure": {
//               "iataCode": "BLR",
//               "at": "2023-06-16T07:00:00"
//             },
//             "arrival": {
//               "iataCode": "HYD",
//               "at": "2023-06-16T08:10:00"
//             },
//             "carrierCode": "UK",
//             "number": "897",
//             "aircraft": {
//               "code": "320"
//             },
//             "operating": {
//               "carrierCode": "UK"
//             },
//             "duration": "PT1H10M",
//             "id": "1",
//             "numberOfStops": 0,
//             "blacklistedInEU": false
//           }
//         ]
//       },
//       {
//         "duration": "PT1H5M",
//         "segments": [
//           {
//             "departure": {
//               "iataCode": "HYD",
//               "at": "2023-06-19T08:50:00"
//             },
//             "arrival": {
//               "iataCode": "BLR",
//               "at": "2023-06-19T09:55:00"
//             },
//             "carrierCode": "UK",
//             "number": "898",
//             "aircraft": {
//               "code": "320"
//             },
//             "operating": {
//               "carrierCode": "UK"
//             },
//             "duration": "PT1H5M",
//             "id": "2",
//             "numberOfStops": 0,
//             "blacklistedInEU": false
//           }
//         ]
//       }
//     ],
//     "price": {
//       "currency": "INR",
//       "total": "14832.00",
//       "base": "9962.00",
//       "fees": [
//         {
//           "amount": "0.00",
//           "type": "SUPPLIER"
//         },
//         {
//           "amount": "0.00",
//           "type": "TICKETING"
//         }
//       ],
//       "grandTotal": "14832.00"
//     },
//     "pricingOptions": {
//       "fareType": [
//         "PUBLISHED"
//       ],
//       "includedCheckedBagsOnly": false
//     },
//     "validatingAirlineCodes": [
//       "UK"
//     ],
//     "travelerPricings": [
//       {
//         "travelerId": "1",
//         "fareOption": "STANDARD",
//         "travelerType": "ADULT",
//         "price": {
//           "currency": "INR",
//           "total": "7416.00",
//           "base": "4981.00"
//         },
//         "fareDetailsBySegment": [
//           {
//             "segmentId": "1",
//             "cabin": "ECONOMY",
//             "fareBasis": "Q0GRPRYS",
//             "brandedFare": "ECOYS",
//             "class": "Q",
//             "includedCheckedBags": {
//               "weight": 15,
//               "weightUnit": "KG"
//             }
//           },
//           {
//             "segmentId": "2",
//             "cabin": "ECONOMY",
//             "fareBasis": "Q0GRPRYS",
//             "brandedFare": "ECOYS",
//             "class": "Q",
//             "includedCheckedBags": {
//               "weight": 15,
//               "weightUnit": "KG"
//             }
//           }
//         ]
//       },
//       {
//         "travelerId": "2",
//         "fareOption": "STANDARD",
//         "travelerType": "CHILD",
//         "price": {
//           "currency": "INR",
//           "total": "7416.00",
//           "base": "4981.00"
//         },
//         "fareDetailsBySegment": [
//           {
//             "segmentId": "1",
//             "cabin": "ECONOMY",
//             "fareBasis": "Q0GRPRYS",
//             "brandedFare": "ECOYS",
//             "class": "Q"
//           },
//           {
//             "segmentId": "2",
//             "cabin": "ECONOMY",
//             "fareBasis": "Q0GRPRYS",
//             "brandedFare": "ECOYS",
//             "class": "Q"
//           }
//         ]
//       }
//     ]
//   }])
//       },[])
    // useEffect(() => {
    //   // Function to fetch flight search data
    //   const fetchFlightSearchData = async () => {
    //     try {
    //       const response = await fetch(
    //         'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BLR&destinationLocationCode=HYD&departureDate=2023-06-16&returnDate=2023-06-19&adults=1&children=1&travelClass=ECONOMY&nonStop=false&currencyCode=INR&max=2',
    //         {
    //           headers: {
    //             Authorization: 'Bearer ZRKSpbVF0BuDdqDl0gUAuYPo8Rob54kn', // Replace with your Amadeus API key
    //           },
    //         }
    //       );
  
    //       if (response.ok) {
    //         const data = await response.json();
    //         setFlights(data.data);
    //       } else {
    //         console.log('Error:', response.status);
    //       }
    //     } catch (error) {
    //       console.log('Error:', error);
    //     }
    //   };
  
    //   // Call the fetchFlightSearchData function
    //   fetchFlightSearchData();
    // }, []);
  
    return (
      <>
    
      {/* <FlightSearch1 /> */}
      <FlightCard />
      </>
      
    );
  }
  

export default FlightSearchResults;