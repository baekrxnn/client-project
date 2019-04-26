// JavaScript File
/*global $*/

let today = new Date();
// get current date
let currentYear=(today.getFullYear()).toString();
let currentMonth=(today.getMonth()+1).toString();
let currentDate=(today.getDate()).toString();

let date = currentYear + "." + currentMonth + "." +currentDate;
console.log(date);

$("#date").text(date);

// get current time
setInterval(currentTime, 999);

function currentTime() {
    let currentHour=(today.getHours()).toString();
    let currentMin=(today.getMinutes()).toString();
    if (currentMin <10) {
        currentMin="0"+currentMin;
    }
    //console.log(currentMin);
    
    let time = currentHour + ":" + currentMin;
    console.log(time);
    
    //append time to the page
    $("#time").text(time);
}



//console.log(new Date().toLocaleTimeString()); 

//debugger;

//getting latitude and longitude

let lat;
let long;

window.navigator.geolocation.getCurrentPosition(function(a) {
    console.log(a);
    var crd = a.coords;
    //console.log(`Latitude : ${crd.latitude}`);
    //console.log(`Longitude: ${crd.longitude}`);
    lat=crd.latitude;
    long=crd.longitude;
    //console.log(lat);
    //console.log(long);
    
    //API Call
    let weather=`https://api.weather.gov/points/${lat},${long}`;
    console.log(weather);
    
    $.ajax({ 
        url: weather,
        method: "GET",
        success: function(response) {
            //console.log(response.properties.forecastHourly);
            let first=response.properties.forecastHourly;
            console.log(first);
            
            //gets hourly weather
                $.ajax({
                    url: first,
                    method: "GET",
                    success: function(a) {
                        let temp= a.properties.periods[0].temperature;
                        let tempUnit= a.properties.periods[0].temperatureUnit;
                        let sky= a.properties.periods[0].shortForecast;
                        //let icon= a.properties.periods[0].icon;
                        console.log(temp);
                        console.log(tempUnit);
                        $(".weather").text(`current weather: ${temp} degrees ${tempUnit}; ${sky}`);
                        //$(".weather").append(`<img src="${icon}">`);
                        
                    }
                    
                });
            
            //
            
        }
        
    });
    
});

//console.log(lat);