import React,{useState,useEffect,useRef,useMemo} from 'react'
import "./FlightPageForm.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// import { Radio, Select, Space } from 'antd';
import CribIcon from '@mui/icons-material/Crib';
import StrollerIcon from '@mui/icons-material/Stroller';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';

import { API, baseURL } from '../../../api/apirequest';

import { message} from 'antd';
import { notification } from 'antd';

const FlightPageForm = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const options = [
        { value: '', label: 'Select Destination' },
        { value: 'BLR', label: 'Bengaluru (BLR)' },
        { value: 'HYD', label: 'Hyderabad (HYD)' },
        { value: 'BOM', label: 'Mumbai (BOM)' },
        { value: 'DEL', label: 'Delhi (DEL)' },
        { value: 'MAA', label: 'Chennai (MAA)' },
        { value: 'CCU', label: 'Kolkata (CCU)' },
        { value: 'AMD', label: 'Ahmedabad (AMD)' },
        { value: 'COK', label: 'Kochi (COK)' },
        { value: 'PNQ', label: 'Pune (PNQ)' },
        { value: 'GOI', label: 'Goa (GOI)' },
        { value: 'IXM', label: 'Madurai (IXM)' },
        { value: 'JAI', label: 'Jaipur (JAI)' },
        { value: 'TRV', label: 'Thiruvananthapuram (TRV)' },
        { value: 'ATQ', label: 'Amritsar (ATQ)' },
        { value: 'IXB', label: 'Bagdogra (IXB)' },
        { value: 'CCJ', label: 'Kozhikode (CCJ)' },
        { value: 'IXR', label: 'Ranchi (IXR)' },
        { value: 'BBI', label: 'Bhubaneswar (BBI)' },
        { value: 'VNS', label: 'Varanasi (VNS)' },
        { value: 'SXR', label: 'Srinagar (SXR)' },
        { value: 'IXZ', label: 'Port Blair (IXZ)' },
        { value: 'IXE', label: 'Mangalore (IXE)' },
        { value: 'LKO', label: 'Lucknow (LKO)' },
        { value: 'IXC', label: 'Chandigarh (IXC)' },
        { value: 'VGA', label: 'Vijayawada (VGA)' },
        { value: 'PAT', label: 'Patna (PAT)' },
        { value: 'RPR', label: 'Raipur (RPR)' },
        { value: 'TRZ', label: 'Tiruchirappalli (TRZ)' },
        { value: 'IXJ', label: 'Jammu (IXJ)' },
        { value: 'HKG', label: 'Hong Kong International Airport (HKG)' },
        { value: 'PVG', label: 'Shanghai Pudong International Airport (PVG)' },
        { value: 'MAD', label: 'Adolfo Suárez Madrid–Barajas Airport (MAD)' },
        { value: 'MUC', label: 'Munich Airport (MUC)' },
        { value: 'ATL', label: 'Hartsfield-Jackson Atlanta International Airport (ATL)' },
        { value: 'LAX', label: 'Los Angeles International Airport (LAX)' },
        { value: 'JFK', label: 'John F. Kennedy International Airport (JFK)' },
        { value: 'ORD', label: "O'Hare International Airport (ORD)" },
        { value: 'LHR', label: 'London Heathrow Airport (LHR)' },
        { value: 'CDG', label: 'Charles de Gaulle Airport (CDG)' },
        { value: 'FRA', label: 'Frankfurt Airport (FRA)' },
        { value: 'DXB', label: 'Dubai International Airport (DXB)' },
        { value: 'SIN', label: 'Singapore Changi Airport (SIN)' },
        { value: 'PEK', label: 'Beijing Capital International Airport (PEK)' },
        { value: 'ICN', label: 'Incheon International Airport (ICN)' },
        { value: 'BKK', label: 'Suvarnabhumi Airport (BKK)' },
        { value: 'SYD', label: 'Sydney Airport (SYD)' },
        { value: 'MEX', label: 'Mexico City International Airport (MEX)' },
        { value: 'NRT', label: 'Narita International Airport (NRT)' },
        { value: 'IST', label: 'Istanbul Airport (IST)' },
        { value: 'AMS', label: 'Amsterdam Airport Schiphol (AMS)' },
        { value: 'CAN', label: 'Guangzhou Baiyun International Airport (CAN)' },
      ];
      const flight_class_options = [
    { value: 'ECONOMY', label: 'ECONOMY' },
    { value: 'PREMIUM_ECONOMY', label: 'PREMIUM_ECONOMY' },
    
    { value: 'BUSINESS', label: 'BUSINESS' },
    
    { value: 'FIRST', label: 'FIRST' },
    ];
    const [selectedFromOption, setSelectedFromOption] = useState(null);

      const ticketing_way = [{ value: 'true', label: 'One Way' },{ value: 'false', label: 'Round Trip' },];
      const [data, setData] = useState({
        user_name: '',
        user_mobile_number: '',
        request_origin: '',
        request_destination: '',
        request_date_of_departure: '',
        request_date_of_arrival: null,
        flight_class: 'ECONOMY',
        
        direct_flight: true,
        one_way: true,
        adults:1,
        children: 0,
        infants: 0,
        Currency: 'INR',
      });
      const [validationErrors, setValidationErrors] = useState({
        user_name: false,
        user_mobile_number: false,
        // ... Other fields ...
    });

      const handleChange = (name, value) => {
        if (name === 'request_origin') {
          setSelectedFromOption(value);
        }
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      console.log(data)
const [count,setCount]=useState(0);
const toOptions = options.filter(option => option.value !== selectedFromOption);

    //   const Counter=()=>{
    //     return(
    //         <>
    //        <button
    //     onClick={(e) => {
    //       e.stopPropagation(); // Prevent event propagation
    //       setCount(count - 1);
    //     }}
    //   >
    //     -
    //   </button>
    //   {count}
    //   <button
    //     onClick={(e) => {
    //       e.stopPropagation(); // Prevent event propagation
    //       setCount(count + 1);
    //     }}
    //   >
    //     +
    //   </button>
    //         </>
    //     )
    //   }
    const updateAdults = (newAdults) => {
        setData((prevData) => ({
          ...prevData,
          adults: newAdults,
        }));
      };
      const updateChildren = (newChildren) => {
        setData((prevData) => ({
          ...prevData,
          children: newChildren,
        }));
      };
      const updateInfants = (newInfants) => {
        setData((prevData) => ({
          ...prevData,
          infants: newInfants,
        }));
      };

      const Counter = ({ count, onCountChange }) => {
        const handleIncrement = () => {
          onCountChange(count + 1);
        };
      
        const handleDecrement = () => {
            if (count > 0) {
                onCountChange(count - 1);
              }
        };
      
        return (
          <>
          <div className='counter-container' 
          style={{ display: "flex",
    gap: "8px",
    height: "auto",
    alignItems: "center",
    justifyContent: "center"
    }}
    >
            <div className="button-container" onClick={handleDecrement}
             style={{
               backgroundColor: "#ffe93d",
               border: "1px solid #eee",
               borderRadius: "50%",
               padding: "1rem",
               textAlign: "center",
               display:"flex",
               alignItems: "center",
               alignContent: "center",
               justifyContent: "center",
               width: "10px",
               height: "10px",
            }}>

            <span  className='counter-button' >-</span>
            </div>
              <span className='counter-count'>{count}</span>
              <div className="button-container" onClick={handleIncrement}  style={{
               backgroundColor: "#ffe93d",
               border: "1px solid #eee",
               borderRadius: "50%",
               padding: "1rem",
               textAlign: "center",
               display:"flex",
               alignItems: "center",
               alignContent: "center",
               justifyContent: "center",
               width: "10px",
               height: "10px",
            }}>

            <span  className='counter-button'>+</span>
            </div>
            </div>
          </>
        );
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {
         
          user_name: !data.user_name,
            user_mobile_number: !data.user_mobile_number,
           
            request_origin: !data.request_origin,
            request_destination: !data.request_destination,
            request_date_of_departure:!data.request_date_of_departure,
           
            
          // ... Other fields ...
      };

      if (Object.values(errors).some(error => error)) {
        // There are validation errors, show error notification and return
        notification.error({
          message: 'Form Validation Error',
          description: 'Please fill all required fields before submitting the form.',
          duration: 2, // Duration in seconds (adjust as needed)
        });
        return;
      }
    
      // Clear validation errors if everything is valid
      setValidationErrors({});
        const config = {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers that are required for your API
          },
        };
        try {
          let ob = {
            data,
          };
          const res = await API.post(baseURL + '/api/flight-enquiries', ob, config);
          notification.success({
            message: 'Enquiry Sent successfully!',
            // description: 'You have successfully logged in.',
            
            duration: 2, // Duration in seconds (adjust as needed)
          });
    
          setData({
            user_name: '',
            user_mobile_number: '',
            user_location: '',
            request_origin: '',
            request_destination: '',
            request_date_of_departure: '',
            request_date_of_arrival: '',
            direct_flight: '',
            one_way: '',
            adults: 1,
            children: '',
            infants: '',
            flight_class: 'ECONOMY',
            Currency: '',
          });

          setTimeout(()=>{
              window.location.reload();
          },3000)
    
          // Perform any necessary actions after form submission
        } catch (error) {
          console.error('Error submitting form:', error);
          notification.error({
            message: 'Unable to send Enquiry!',
            description: 'Please fill all details to send enquiry',
            
            duration: 2, // Duration in seconds (adjust as needed)
          });
        }
      };
      
  return (
<>
<div className="flight-container">
    <div className="flight-wrapper">

        <div className="flight-container-form">
        <div className="title">Flight Enquiry</div>
        <Paper>
        <div className="form-wrappper">

        <Grid container style={{
          display: "flex",
  flexDirection: "column",
    gap:"1rem"
        }}>
        <Grid container spacing={2}  >
        <Grid item sm={12} md={3} >
        {/* <TextField  fullWidth id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <TextField className="no-margin small-size"
                                            margin="normal"
                                            fullWidth
                                            label="Enter Your Name"
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            onChange={(e) => handleChange('user_name', e.target.value )} // Convert string back to boolean
      

                                        />
        </Grid>
        <Grid item sm={12} md={3} >
        {/* <TextField  fullWidth id="outlined-basic" label="Outlined" variant="outlined" /> */}
                                           <TextField className="no-margin small-size"
                                            margin="normal"
                                            fullWidth
                                        
                                            label="Enter Mobile Number"
                                            type="number"
                                            id="user_mobile_number"
                                            name="user_mobile_number" 
                                            onChange={(e) => handleChange('user_mobile_number', e.target.value )} // Convert string back to boolean
      

                                        />
        </Grid>
        <Grid item sm={12} md={3} >
        <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label" >Trip Mode</InputLabel>
        <Select

        className='small-size'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.one_way} // Convert boolean to string
          label="one_way"
          name="one_way"
          onChange={(e) => handleChange('one_way', e.target.value )} // Convert string back to boolean
        >
          {ticketing_way.map((v) => (
            <MenuItem key={v.value} value={v.value}>
              {v.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        {/* <FormControl fullWidth>
              
                 

<Autocomplete
disablePortal
            id="combo-box-demo-origin"
            options={ticketing_way}
            getOptionLabel={(option) => option.label}
            name="one_way"
            onChange={(e, value) => handleChange("one_way", value.value)}
            renderInput={(params) => <TextField {...params} label="Trip" />}
          />
                    </FormControl> */}
                  </Grid>
        <Grid item sm={12} md={3} className="flight-menu-container">
       <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
       <Tooltip title="Passenger Details /Flight Class">
          {/* <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            Traveller details
          </IconButton> */}
          <Button variant="outlined"
          onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            style={{
              padding: "1rem",
              margin: "0",
              width: "100%"
            }}
            className='small-size'
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            {`Passenger (${data.adults + data.children + data.infants}) / ${data.flight_class}`}

          </Button>
        </Tooltip>
      </Box>
      <Menu
     
      className="traveller-details"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            minWidth: '210px !important',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={(e) => {e.stopPropagation()}} className="flight-menu-item" 
        style={{
          minHeight: "auto",
  display: "flex",
  justifyContent: "space-between",
  gap:"1rem"
  }}>
        <ListItemIcon>
        <div className='list-item-text' 
        style={{display: "flex",
flexDirection: "column"}}
>
          <div className="upper-text">
            <div className='sub-text' style={{  display: "flex",
    alignItems: "center !important",
    alignContent: "center !important",
    justifyContent: "flex-start",
    gap: "6px"}}
    >
          <PersonIcon />
        <span>
Adults
        </span>
            </div>
         
          </div>
          <div className="lower-text"></div>
       
          {`(Age above 12 yrs)`}
        </div>
          
          </ListItemIcon>
        {/* <ListItemIcon>
        <div className='list-item-text'>
        <PersonIcon />
          Adults <br />
          {`Age > 12 yrs`}
        </div>
          </ListItemIcon> */}
        <Counter count={data.adults} onCountChange={updateAdults} />
          
        </MenuItem>
       
<MenuItem onClick={(e) => {e.stopPropagation()}} className="flight-menu-item" 
style={{
  minHeight: "auto",
display: "flex",
justifyContent: "space-between",
gap:"1rem"
}}>
        <ListItemIcon>
        <div className='list-item-text' 
        style={{display: "flex",
flexDirection: "column"}}
>
          <div className="upper-text">
          <div className='sub-text' style={{  display: "flex",
    alignItems: "center !important",
    alignContent: "center !important",
    justifyContent: "flex-start",
    gap: "6px"}}
    >
            <ChildCareIcon />
        <span>

        Children 
        </span>
            </div>
         
          </div>
          <div className="lower-text"></div>
       
          {`(Age 2 to 12 yrs)`}
        </div>
          
          </ListItemIcon>
        <Counter count={data.children} onCountChange={updateChildren} />
        </MenuItem>
          

        <MenuItem onClick={(e) => {e.stopPropagation()}} className="flight-menu-item" 
       style={{
        minHeight: "auto",
display: "flex",
justifyContent: "space-between",
gap:"1rem"
}}>

          {/* <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon> */}
           <ListItemIcon>
           <div className='list-item-text' 
        style={{display: "flex",
flexDirection: "column"}}
>
          <div className="upper-text">
          <div className='sub-text' style={{  display: "flex",
    alignItems: "center !important",
    alignContent: "center !important",
    justifyContent: "flex-start",
    gap: "6px"}}
    >
        <ChildFriendlyIcon />
        <span>Infants
        </span>
            </div>
         
          </div>
          <div className="lower-text"></div>
       
          {`(Age below 2 yrs)`}
        </div>
          
          </ListItemIcon>
          <Counter count={data.infants} onCountChange={updateInfants} />
        </MenuItem>
        {/* <Divider /> */}
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
             <MenuItem onClick={(e) => {e.stopPropagation()}} className="flight-menu-item">
             <FormControl fullWidth>
                  {/* <Autocomplete
            disablePortal
            id="combo-box-demo-origin"
            options={flight_class_options}
            getOptionLabel={(option) => option.label}
            name="flight_class"
            onChange={(e, value) => handleChange("flight_class", value.value)}
            renderInput={(params) => <TextField {...params} label="Flight Class" />}
          /> */}
            <InputLabel id="demo-simple-select-label" >Select Class</InputLabel>
      
               <Select
               className='small-size'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.flight_class} // Convert boolean to string
          label="Flight Class"
          name="flight_class"
          onChange={(e) => handleChange('flight_class', e.target.value )} // Convert string back to boolean
        >
          {flight_class_options.map((v) => (
            <MenuItem key={v.value} value={v.value}>
              {v.label}
            </MenuItem>
          ))}
        </Select>
          </FormControl>  
        </MenuItem>
      </Menu>
       </Grid>
                  <Grid item sm={12} md={3}>
                  {/* <FormControl fullWidth>
                  <Autocomplete
            disablePortal
            id="combo-box-demo-origin"
            options={flight_class_options}
            getOptionLabel={(option) => option.label}
            name="flight_class"
            onChange={(e, value) => handleChange("flight_class", value.value)}
            renderInput={(params) => <TextField {...params} label="Flight Class" />}
          /></FormControl> */}
                  </Grid>
                  
               </Grid>
      <Grid container spacing={2}>
      <Grid item sm={12} md={3}>
      <Autocomplete
      className='small-size'
            disablePortal
            id="combo-box-demo-origin"
            options={options}
            getOptionLabel={(option) => option.label}
            name="request_origin"
            onChange={(e, value) => handleChange("request_origin", value.value)}
            renderInput={(params) => <TextField {...params} label="From" />}
          />

        </Grid>
        <Grid item sm={12} md={3}>
      <Autocomplete
        className='small-size'
        disablePortal
        id="combo-box-demo-origin"
        options={toOptions}
        getOptionLabel={(option) => option.label}
        name="request_destination"
        onChange={(e, value) => handleChange("request_destination", value.value)}
        renderInput={(params) => <TextField {...params} label="To" />}
      />
    </Grid>
        <Grid item sm={12} md={3}>
       
<TextField
className='small-size'
  fullWidth
  id="departure-date"
  label="Departure Date"
  type="date"
  name="request_date_of_departure"
  value={data.request_date_of_departure} // Set the value to the state value
  onChange={(e) => {handleChange("request_date_of_departure", e.target.value)}} // Access the value from e.target.value
  InputLabelProps={{
    shrink: true,
  }}
/>
                  </Grid>

                  <Grid item sm={12} md={3}>
                  {data.one_way === 'false' && (
                      <TextField

                      className='small-size'
                      
  fullWidth
  id="arrival-date"
  label="Arrival Date"
  type="date"
  name="request_date_of_arrival"
  value={data.request_date_of_arrival} // Set the value to the state value
  onChange={(e) => {handleChange("request_date_of_arrival", e.target.value)}} // Access the value from e.target.value
  InputLabelProps={{
    shrink: true,
  }}
/>
                  )}
                  </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                  <Grid item sm={12} md={12}>
                  <button type="submit" className="form-submit-button small-size" onClick={handleSubmit}>
            Enquire Flights
          </button>
          </Grid>
                    </Grid>
                  </Grid>
                 
        </div>
      </Paper> 
        </div>
    </div>
</div>
</>
  )
}

export default FlightPageForm