// Testing JQuery
$("header").click(function () {
    console.log("The title has been clicked.");
});
// Grab the current hour to be used in inputEl
var currentHour = moment().format("kk");
console.log(currentHour);

// Generate hour class block
function generateInputEl(hour) {
    console.log(hour);
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    // Use the id to call localStorage.
    inputEl.id = hour;
    inputEl.value = localStorage.getItem(hour);
    if (hour < currentHour) {
        inputEl.classList.add("past");
    } else if (hour == currentHour) {
        inputEl.classList.add("present");
    } else {
        inputEl.classList.add("future");
    }


    return inputEl;
};

// Generate saveBtnEl
function generateSaveBtnEl() {
    var saveBtnEl = document.createElement("div");
    saveBtnEl.classList.add("saveBtn");


    return saveBtnEl;
}

// Generate rows
function generateRows() {
    //currentHour = moment().format("hh");
    for (let i = 9; i <= 17; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row time-block");
        if (i < 12) {
            row.innerHTML = `<div class="hour">${i}AM</div>`;
        } else if (i === 12) {
            row.innerHTML = `<div class="hour">${i}PM</div>`;
        } else {
            row.innerHTML = `<div class="hour" id="${i}">${i - 12}PM</div>`;
        }
        row.append(generateInputEl(i));
        row.append(generateSaveBtnEl());

        $(".container").append(row);
        console.log("row appended");
    }
};

// Save to Local Storage
function saveToLocal() {
    console.log($(this).siblings("input")[0].value);
    console.log($(this).siblings("input"));
    let key = $(this).siblings("input")[0].id;
    let item = $(this).siblings("input")[0].value;
    localStorage.setItem(key, item);
    console.log(key);
    console.log(localStorage.getItem(key));
    console.log(localStorage);
}

// Retrieve Local Storage 


$(document).ready(function () {
    var m = moment().format("dddd, MMMM D");
    if (m == localStorage.getItem("m")) {
        // had to set if statement up like this due to === and !== funky business
        console.log("Dates match");
    } else {
        localStorage.clear();
        console.log("Local storage has been cleared");
    }
    localStorage.setItem("m", m);
    console.log("The document is ready!");
    console.log(m);
    console.log(localStorage.getItem("m"));
    $("#currentDay").text(m);
    // If localStorage dates do not match, clear localStorage
    generateRows();
    $(".saveBtn").click(saveToLocal);
});

/* General steps moving forward:
    - Use Moment.js to get current day
    - Load current day
    - Use Moment.js to get current time.
    - load up time slots and pull information from
        local storage to fill information.
    - save functions once buttons are hit
*/