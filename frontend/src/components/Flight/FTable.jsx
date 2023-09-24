import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';


const flightData={
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
            "lastTicketingDate": "2023-06-27",
            "lastTicketingDateTime": "2023-06-27",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT1H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BLR",
                                "at": "2023-06-27T14:00:00"
                            },
                            "arrival": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-27T15:10:00"
                            },
                            "carrierCode": "AI",
                            "number": "564",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT1H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-28T11:10:00"
                            },
                            "arrival": {
                                "iataCode": "BLR",
                                "at": "2023-06-28T12:20:00"
                            },
                            "carrierCode": "AI",
                            "number": "563",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H10M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "INR",
                "total": "6086.00",
                "base": "4168.00",
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
                "grandTotal": "6086.00"
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
                        "total": "6086.00",
                        "base": "4168.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "SIPS2",
                            "class": "S",
                            "includedCheckedBags": {
                                "weight": 25,
                                "weightUnit": "KG"
                            }
                        },
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "UIPS2",
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
            "lastTicketingDate": "2023-06-27",
            "lastTicketingDateTime": "2023-06-27",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT1H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BLR",
                                "at": "2023-06-27T14:00:00"
                            },
                            "arrival": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-27T15:10:00"
                            },
                            "carrierCode": "AI",
                            "number": "564",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT4H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-28T06:20:00"
                            },
                            "arrival": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2023-06-28T08:05:00"
                            },
                            "carrierCode": "AI",
                            "number": "569",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H45M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2023-06-28T09:30:00"
                            },
                            "arrival": {
                                "iataCode": "BLR",
                                "at": "2023-06-28T11:10:00"
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
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "INR",
                "total": "11109.00",
                "base": "9002.00",
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
                "grandTotal": "11109.00"
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
                        "total": "11109.00",
                        "base": "9002.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "SIPS2",
                            "class": "S",
                            "includedCheckedBags": {
                                "weight": 25,
                                "weightUnit": "KG"
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "LIP",
                            "class": "L",
                            "includedCheckedBags": {
                                "weight": 25,
                                "weightUnit": "KG"
                            }
                        },
                        {
                            "segmentId": "6",
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
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2023-06-27",
            "lastTicketingDateTime": "2023-06-27",
            "numberOfBookableSeats": 1,
            "itineraries": [
                {
                    "duration": "PT1H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "BLR",
                                "at": "2023-06-27T14:00:00"
                            },
                            "arrival": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-27T15:10:00"
                            },
                            "carrierCode": "AI",
                            "number": "564",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H10M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT12H",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "MAA",
                                "terminal": "1",
                                "at": "2023-06-28T06:20:00"
                            },
                            "arrival": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2023-06-28T08:05:00"
                            },
                            "carrierCode": "AI",
                            "number": "569",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H45M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "BOM",
                                "terminal": "2",
                                "at": "2023-06-28T16:40:00"
                            },
                            "arrival": {
                                "iataCode": "BLR",
                                "at": "2023-06-28T18:20:00"
                            },
                            "carrierCode": "AI",
                            "number": "607",
                            "aircraft": {
                                "code": "32N"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H40M",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "INR",
                "total": "11109.00",
                "base": "9002.00",
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
                "grandTotal": "11109.00"
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
                        "total": "11109.00",
                        "base": "9002.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "SIPS2",
                            "class": "S",
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
                            "segmentId": "3",
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
        }
    ],
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
export default function FlightTable() {
    const styles = {
        heading: {
            
            backgroundColor: '#eee', // Example background color for default state
          },
          row: {
          '&:hover': {
            backgroundColor: '#f5f5f5', // Example background color on hover
            cursor: 'pointer', // Example cursor style on hover
          },
          backgroundColor: '#ffffff', // Example background color for default state
        },
      };
    
  return (
    <TableContainer>
      <Table>
        <TableHead>
       
        </TableHead>
        <TableBody>
          <TableRow sx={styles.heading}>
          < TableCell>type </TableCell>
            < TableCell>id </TableCell>
            < TableCell>Source </TableCell>
            < TableCell>instantTicketingRequired </TableCell>
             < TableCell>nonHomogeneous </TableCell>
         
            < TableCell>oneWay </TableCell>
            < TableCell>lastTicketingDate </TableCell>
            < TableCell>lastTicketingDateTime </TableCell>
            < TableCell>numberOfBookableSeats </TableCell>
          
            {/* starting point */}
            < TableCell>(going ticket) boarding point - first </TableCell>
            < TableCell>duration </TableCell>

            < TableCell>departure </TableCell>
            < TableCell>iataCode </TableCell>
            < TableCell>terminal </TableCell>
            < TableCell>at </TableCell>

            < TableCell>arrival </TableCell>
            < TableCell>iataCode </TableCell>
            < TableCell>terminal </TableCell>
            < TableCell>at </TableCell>
          
            < TableCell>carrierCode </TableCell>
            < TableCell>number </TableCell>
            < TableCell>aircraft (code) </TableCell>
            < TableCell>operating (carrierCode) </TableCell>
            < TableCell>duration </TableCell>
            
            < TableCell>id </TableCell>
            < TableCell>numberOfStops </TableCell>
            < TableCell>blacklistedInEU </TableCell>

          
{/* returning point point */}
{/* < TableCell>(return ticket)boarding point - second </TableCell>


            < TableCell>duration </TableCell>

            < TableCell>departure </TableCell>
            < TableCell>iataCode </TableCell>
            < TableCell>terminal </TableCell>
            < TableCell>at </TableCell>

            < TableCell>arrival </TableCell>
            < TableCell>iataCode </TableCell>
            < TableCell>terminal </TableCell>
            < TableCell>at </TableCell>
            
          
          
            < TableCell>carrierCode </TableCell>
            < TableCell>number </TableCell>
            < TableCell>aircraft (code) </TableCell>
            < TableCell>operating (carrierCode) </TableCell>
            < TableCell>duration </TableCell>
            
            < TableCell>id </TableCell>
            < TableCell>numberOfStops </TableCell>
            < TableCell>blacklistedInEU </TableCell> */}

          

            < TableCell>price(base) </TableCell>


            
            < TableCell>price(total) </TableCell>
            < TableCell>fees(SUPPLIER) </TableCell>
            < TableCell>fees(TICKETING) </TableCell>
            < TableCell>price (grandTotal) </TableCell>
            < TableCell>duration </TableCell>
          </TableRow>

          {flightData.data.map((flight) =>{
            return(
                <>


<TableRow sx={styles.row}>
          < TableCell>{flight.type}</TableCell>
            < TableCell>{flight.id} </TableCell>
            < TableCell>{flight.source}</TableCell>
            < TableCell>{flight.instantTicketingRequired} </TableCell>
             < TableCell>{flight.nonHomogeneous} </TableCell>
         
            < TableCell>{flight.oneWay} </TableCell>
            < TableCell>{flight.lastTicketingDate} </TableCell>
            < TableCell>{flight.lastTicketingDateTime} </TableCell>
            < TableCell>{flight.numberOfBookableSeats} </TableCell>
          
            {/* starting point */}
            < TableCell>(going ticket) boarding point - first </TableCell>
            < TableCell>{flight.itineraries[0].duration} </TableCell>
{/* {
flight.itineraries[0].segments.map((v)=>{

    return(
        <>
        <TableCell>-</TableCell>
        
        <TableCell>{v.departure.iataCode}</TableCell>
         <TableCell>{v.departure.terminal?<>{v.departure.terminal}</>:<>N/A</>}</TableCell>
           < TableCell>{v.departure.at} </TableCell>
            <TableCell>-</TableCell>
             <TableCell>{v.arrival.iataCode}</TableCell>
         <TableCell>{v.arrival.terminal?<>{v.arrival.terminal}</>:<>N/A</>}</TableCell>
           < TableCell>{v.arrival.at} </TableCell>
   < TableCell>{v.carrierCode} </TableCell>
            < TableCell>{v.number} </TableCell>
            < TableCell>{v.aircraft.code}</TableCell>
            < TableCell>{v.operating.carrierCode}</TableCell>
            < TableCell>{v.duration}</TableCell>
             < TableCell>{v.id} </TableCell>
            < TableCell>{v.numberOfStops} </TableCell>
            < TableCell>{v.blacklistedInEU} </TableCell>
             < TableCell>-</TableCell>
               <TableCell>-</TableCell>
        </>
    )
})
          } */}
          
          
                        <TableCell>-</TableCell>            
             < TableCell>{flight.itineraries[0].segments[0].departure.iataCode} </TableCell>
                      <TableCell>{flight.itineraries[0].segments[0].arrival.terminal?<>{flight.itineraries[0].segments[0].arrival.terminal}</>:<>N/A</>}</TableCell>

            < TableCell>{flight.itineraries[0].segments[0].departure.at} </TableCell>
            <TableCell>-</TableCell>
             <TableCell>{flight.itineraries[0].segments[0].arrival.iataCode}</TableCell>
         <TableCell>{flight.itineraries[0].segments[0].arrival.terminal?<>{flight.itineraries[0].segments[0].arrival.terminal}</>:<>N/A</>}</TableCell>
           < TableCell>{flight.itineraries[0].segments[0].arrival.at} </TableCell>
   < TableCell>{flight.itineraries[0].segments[0].carrierCode} </TableCell>
            < TableCell>{flight.itineraries[0].segments[0].number} </TableCell>
            < TableCell>{flight.itineraries[0].segments[0].aircraft.code}</TableCell>
            < TableCell>{flight.itineraries[0].segments[0].operating.carrierCode}</TableCell>
            < TableCell>{flight.itineraries[0].segments[0].duration}</TableCell>
             < TableCell>{flight.itineraries[0].segments[0].id} </TableCell>
            < TableCell>{flight.itineraries[0].segments[0].numberOfStops} </TableCell>
            < TableCell>{flight.itineraries[0].segments[0].blacklistedInEU} </TableCell>

          
{/* returning point point */}
{/* < TableCell>(return ticket)boarding point - second </TableCell>

                        <TableCell>-</TableCell>            
                     <TableCell>-</TableCell>            
             < TableCell>{flight.itineraries[1].segments[1].departure.iataCode} </TableCell>
                      <TableCell>{flight.itineraries[0].segments[1].arrival.terminal?<>{flight.itineraries[0].segments[0].arrival.terminal}</>:<>N/A</>}</TableCell>

            < TableCell>{flight.itineraries[0].segments[1].departure.at} </TableCell>
            <TableCell>-</TableCell>
             <TableCell>{flight.itineraries[0].segments[1].arrival.iataCode}</TableCell>
         <TableCell>{flight.itineraries[0].segments[1].arrival.terminal?<>{flight.itineraries[0].segments[0].arrival.terminal}</>:<>N/A</>}</TableCell>
           < TableCell>{flight.itineraries[0].segments[1].arrival.at} </TableCell>
   < TableCell>{flight.itineraries[0].segments[1].carrierCode} </TableCell>
            < TableCell>{flight.itineraries[0].segments[1].number} </TableCell>
            < TableCell>{flight.itineraries[0].segments[1].aircraft.code}</TableCell>
            < TableCell>{flight.itineraries[0].segments[1].operating.carrierCode}</TableCell>
            < TableCell>{flight.itineraries[0].segments[1].duration}</TableCell>
             < TableCell>{flight.itineraries[0].segments[1].id} </TableCell>
            < TableCell>{flight.itineraries[0].segments[1].numberOfStops} </TableCell>
            < TableCell>{flight.itineraries[0].segments[1].blacklistedInEU} </TableCell> */}

          

            < TableCell>price(base) </TableCell>


            
            < TableCell>price(total) </TableCell>
            < TableCell>fees(SUPPLIER) </TableCell>
            < TableCell>fees(TICKETING) </TableCell>
            < TableCell>price (grandTotal) </TableCell>
            < TableCell>duration </TableCell>
          </TableRow>
          </>)}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
