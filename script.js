// JavaScript File
/*global $*/

let today = new Date();
let currentYear=(today.prototype.getFullYear()).toString();
let currentMonth=(today.prototype.getMonth()+1).toString();
let currentDate=(today.prototype.getDate()).toString();

let date = currentYear + "." + currentMonth + "." +currentDate;
console.log(date);

let day=(Date()).toString;
console.log(day);

$("#date").text(day);