let currentTime = moment().format("dddd, MMMM Do YYYY");
let currentHour = moment().format("HH");

document.getElementById("currentDay").innerHTML = currentTime.toString();

$("input").each(function(index, element){
    if(currentHour > $(element).attr("id")){
        $(element).addClass("past");
    }else if(currentHour === $(element).attr("id")){
        $(element).addClass("present")
    }else if(currentHour < $(element).attr("id")){
        $(element).addClass("future")
    }
})

$("#saveButton09").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#09").val());
    let key = "task-09";
    localStorage.setItem(key, inputVal);
})

$("#saveButton10").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#10").val());
    let key = "task-10";
    localStorage.setItem(key, inputVal);
})

$("#saveButton11").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#11").val());
    let key = "task-11";
    localStorage.setItem(key, inputVal);
})

$("#saveButton12").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#12").val());
    let key = "task-12";
    localStorage.setItem(key, inputVal);
})

$("#saveButton1").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#13").val());
    let key = "task-13";
    localStorage.setItem(key, inputVal);
})

$("#saveButton2").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#14").val());
    let key = "task-14";
    localStorage.setItem(key, inputVal);
})

$("#saveButton3").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#15").val());
    let key = "task-15";
    localStorage.setItem(key, inputVal);
})

$("#saveButton4").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#16").val());
    let key = "task-16";
    localStorage.setItem(key, inputVal);
})

$("#saveButton5").click(function(event) {
    event.preventDefault();
    let inputVal = ($("#17").val());
    let key = "task-17";
    localStorage.setItem(key, inputVal);
})

let loadTasks = () => {
    for(let i = 0; i < 9; i++) {
        let temp;
        let num = 9 + i;
        let str = "task-";
        if(num === 9) {
            str = "task-09";
            temp = "09";
        } else {
            str = "task-" + num;
            temp = num.toString();
        }
        let data = localStorage.getItem(str);
        if(data) {
           document.getElementById(temp).setAttribute("value", data);
        }
    }
}

$(document).ready(function() {
    loadTasks();
});