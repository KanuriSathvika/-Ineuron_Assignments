// data
// variable to store the element
// Function to get the data from weather app
let data;
const inputbox=document.getElementById("inputbox");
const countryname=document.getElementById("countryname");
const statename=document.getElementById("statename");
const cityname=document.getElementById("cityname");
const humidity=document.getElementById("humidity");
const windspeed=document.getElementById("windspeed");
const temperature=document.getElementById("temperature");
const logoimage=document.querySelector("img");
const weatherstatus=document.getElementById("weatherstatus");

const getData=async (event)=>{
   event.preventDefault();
   if(!inputbox.value){
     alert("Please Enter the city name");
     return;
   } 
   const city=inputbox.value;
//    Fetch details
const fetchdata= await fetch(`https://api.weatherapi.com/v1/current.json?key=42ef5802fd6046d2a07174718231602&q=${city}`
);
const orgdata=await fetchdata.json();
data=orgdata;
console.log(data);

// dispalying the data in html
countryname.innerHTML=data.location.country;
statename.innerHTML=data.location.region;
cityname.innerHTML=data.location.name;
humidity.innerHTML=data.current.humidity;
windspeed.innerHTML=data.current.wind_kph;
temperature.innerHTML=data.current.temp_c;
logoimage.src=data.current.condition.icon;
weatherstatus.innerHTML=data.current.condition.text;
};