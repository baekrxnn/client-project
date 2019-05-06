// JavaScript File
/*global $*/

let today = new Date();
// get current date
let currentYear=(today.getFullYear()).toString();
let currentMonth=(today.getMonth()+1).toString();
let currentDate=(today.getDate()).toString();

if (currentMonth<10) {
    currentMonth="0"+currentMonth;
}

if (currentDate<10) {
    currentDate="0"+currentDate;
}

let date = currentYear + "." + currentMonth + "." +currentDate;
console.log(date);

$("#date").text(date);

// get current time

function getNow() {
    let currentHour=(today.getHours()).toString();
    let currentMin=(today.getMinutes()).toString();
    let currentSec=(today.getSeconds());
    if (currentMin <10) {
        currentMin="0"+currentMin;
    }
    //console.log(currentSec);
    //console.log(currentMin);
    
    if (currentSec === 59 || currentSec === 0) {
        window.location.reload();
    }
    
    let time = currentHour + ":" + currentMin;
    return time;
}

setInterval(currentTime, 999);

function currentTime() {
    let now = getNow();
    
    //append time to the page
    $("#time").text(now);
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


let colors= [
    //green&blue
    "mediumturquoise",
    "darkturquoise",
    "cadetblue",
    "steelblue",
    "cornflowerblue",
    "royalblue",
    "darkblue",
    "navy",
    "midnightblue",
    
    //red&brown
    "indianred",
    "firebrick",
    "darkred",
    "maroon",
    "brown",
    
    //gray
    "darkgray",
    "gray",
    "dimgray",
    "slategray",
    ];

function col() {
    colors.forEach(function(co) {
        co = Math.floor(Math.random() * colors.length);
        console.log(co);
        $("body").css("background-color",colors[co]);
    });
}

setInterval(col, 60000);