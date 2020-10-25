// How to edit text for each day
// $(".list-group").on("click", "p", function() {
//     let text = $(this)
//       .text()
//       .trim();
//     let textInput = $("<textarea>")
//       .addClass("form-control")
//       .val(text);
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
//   });

// How to apply color based on date
// let auditTask = function(taskEl) {
//     // Get date from task element
//     let date = $(taskEl)
//       .find("span")
//       .text()
//       .trim();
//     // Convert to moment object at 5:00pm
//     let time = moment(date, "L").set("hour", 17);
//     // Remove old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
//     // Apply new classes if task is near or overdue
//     if (moment().isAfter(time)) {
//       $(taskEl).addClass("list-group-item-danger");
//     } else if (Math.abs(moment().diff(time, "days")) <= 2) {
//       $(taskEl).addClass("list-group-item-warning");
//     }
//   };

let currentTime = moment().format("dddd, MMMM Do YYYY");
let currentHour = moment().format("HH");
let textAreaId = 0;
let tasks = {};

console.log(currentHour);

document.getElementById("currentDay").innerHTML = currentTime.toString();

$(".time-block").each(function(index, element){
    if(currentHour > $(element).attr("id")){
        $(element).addClass("past");
    }else if(currentHour === $(element).attr("id")){
        $(element).addClass("present")
    }else if(currentHour < $(element).attr("id")){
        $(element).addClass("future")
    }
})

$(".time-block").on("click", "p", function() {
let text = $(this)
    .text()
    .trim();
let textInput = $("<textarea>")
    .val(text)
    .attr("id", textAreaId);
$(this).replaceWith(textInput);
textInput.trigger("focus");
textAreaId++;
});

$(".saveBtn").click(function() {
console.log("You clicked the save button");
});

// $(document).ready(function() {
//     populate();
// });
  