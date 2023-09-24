import DemoFlight from "./DemoFlight";
import FlightCard from "./FlightCard";
import FCard from "./FCard";
import FTable from "./FTable";
import "./Flight.scss";
import FlightData from "./FlightData";
import FAntTable from "./FAntTable";
import Dash from "./Dash";
import FlightFormSubmit from "./FlightFormSubmit";
import FlightPageForm from "./FlightUI/FlightPageForm";

const demo_url='https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BLR&destinationLocationCode=MAA&departureDate=2023-06-26&returnDate=2023-06-27&adults=1&travelClass=ECONOMY&includedAirlineCodes=AI&excludedAirlineCodes=6E&nonStop=true&currencyCode=INR&maxPrice=150000&max=250';
const Flight = () => {
    return (
        <>
            <FlightPageForm />
        {/* <div className="flight-page-container"> */}
            {/* <FlightFormSubmit /> */}
            {/* <div className="pages">
                <h1 className="page-heading">Flight page coming soon...</h1>
                
            </div> */}
            
            
            {/* ===IMPORTANT=== */}
            {/* <DemoFlight /> */}
            {/* ===IMPORTANT=== */}


            {/* <FAntTable /> */}
            {/* <FlightData /> */}
            {/* <FTable /> */}
            {/* <FCard /> */}
            {/* <FlightCard /> */}
            {/* <Dash /> */}
        {/* </div> */}
        </>
    )
}

export default Flight;