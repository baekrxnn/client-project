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

$("#time").text(time);

//console.log(new Date().toLocaleTimeString()); 