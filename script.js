$(function(){
let todayDate = moment();
let displayDay = document.getElementById("currentDay");
console.log(displayDay);
displayDay.innerText = todayDate.format("dddd MMMM Do YYYY");
let theHour = [
    moment().hour(5),
    moment().hour(6),
    moment().hour(7),
    moment().hour(8),
    moment().hour(9),
    moment().hour(10),
    moment().hour(11),
    moment().hour(12),
    moment().hour(13),
    moment().hour(14),
    moment().hour(15),
    moment().hour(16),
    moment().hour(17),
    moment().hour(18),
    moment().hour(19),
    moment().hour(20),
    moment().hour(21)
];
let timeCount = 5;
let hourArea = moment().hour(timeCount);
let thisHour = $(`.hour-${hourArea.format("HH")}`);
let needToDo = thisHour.value;
$(".saveBtn").on("click", function() {
    $("<textarea>").append(needToDo);
    window.localStorage.setItem("toDoList", JSON.stringify(needToDo));
});
function timeChange() {
        if (0 > theHour.diff(moment().thisHour)) {
            thisHour.addClass(".past");
        }
        if (0 < theHour.diff(moment().thisHour)) {
            thisHour.addClass(".future");
        }
        else {
            thisHour.addClass(".present")
        }
        timeCount++;
    }
timeChange ();
});