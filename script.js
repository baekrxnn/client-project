// JavaScript File
/*global $*/

let today = new Date();
let currentYear=(today.getFullYear()).toString();
let currentMonth=(today.getMonth()+1).toString();
let currentDate=(today.getDate()).toString();

let date = currentYear + "." + currentMonth + "." +currentDate;
console.log(date);

$("#date").text(date);