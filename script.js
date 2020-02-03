let todayDate = moment();
let displayDay = document.getElementById("currentDay");
console.log(displayDay);
displayDay.innerText = todayDate.format("dddd MMMM Do YYYY");