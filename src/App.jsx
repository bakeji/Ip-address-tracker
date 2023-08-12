  import React, { useState, useEffect} from "react"
  import Search from "./components/search-address"
  import Result from "./components/result"
  import Map from "./components/map"

  export default function App() {
      const [getInputData, setGetInputData]= useState("")
      const [locationData, setLocationData]= useState({})
      const [showLocationData, setShowLocationData] =useState(false)
      const [isloaded, setIsLoaded] =useState(false)
      const [getUserIp, setGetUserIp]=useState("")

      function handleChange(event){
        setGetInputData(event.target.value)
      }
      useEffect(()=>{
      
      },[getInputData, getUserIp])

      // function to fetch the user ip
      async function fetchUserIP() {
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          setGetUserIp(data.ip);
        } catch (error) {
          console.error("Error fetching user's IP:", error);
        }
      }

 // fetch user ip address and their geo-location data on first load
      useEffect(()=>{
        if(getInputData==="" && getUserIp!==""){
             fetchUserIP()
          fetchLocationData()
        }
      }, [])


// fetching the geo-locaion data with the user ip address or the ip inputed by the user
      async function fetchLocationData() {
        const apiKey= import.meta.env.VITE_API_KEY;
        try {
          const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${showLocationData? getInputData : getUserIp}`);
          const responseData = await response.json();
          const data = {
            city: responseData.location.city,
            region: responseData.location.region,
            timezone: responseData.location.timezone,
            postalCode: responseData.location.postalCode || "",
            ipAddress: responseData.ip,
            isp: responseData.isp,
            lats: responseData.location.lat,
            lngs: responseData.location.lng,
          };
          setLocationData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLocationData({});
        }
      }

      // showData button
      function showData(){
        if(getInputData!==""){
          setShowLocationData(true)
          fetchLocationData()
        }
      }
      useEffect(()=>{
        renderMap()
      }, [])
      
      function renderMap() {
        if (locationData.lats !== undefined && locationData.lngs !== undefined) {
          setIsLoaded(true);
        }
      }

      


    return (
        <div className="app">
          <div className="tp">
          <Search 
          handleChange = {handleChange}
          showData={showData}
          />

          
          <Result
          showlocationData ={showLocationData}
          ipAddress={locationData.ipAddress}
          city ={locationData.city}
          region ={locationData.region}
          timeZone={locationData.timezone}
          postalCode ={locationData.postalCode}
          isp ={locationData.isp} 
          
          />
          </div>

          <div className={isloaded? "map": ""}>

            {isloaded? (
        <Map 
        latitude ={locationData.lats}
        longtitude ={locationData.lngs} 
        isloaded ={isloaded}/>)
        :
        <p className="load">is loading.....</p>
            }
        </div>
            
            
          
        </div>
      
    )
  }


