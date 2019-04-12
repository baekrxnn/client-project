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

//console.log(new Date().toLocaleTimeString()); 

//debugger;

//getting latitude and longitude
window.navigator.geolocation.getCurrentPosition(function(a) {
    console.log(a);
    var crd = a.coords;
    //console.log(`Latitude : ${crd.latitude}`);
    //console.log(`Longitude: ${crd.longitude}`);
    let lat=crd.latitude;
    let long=crd.longitude;
    console.log(lat);
    console.log(long);
});

