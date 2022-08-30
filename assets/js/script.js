// Testing JQuery
$("header").click(function () {
    console.log("The title has been clicked.");
});
// Grab the current hour to be used in inputEl
var currentHour = moment().format("kk");
console.log(currentHour);

// Generate hour class block
function generateInputEl(hour) {
    //console.log(hour);
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
    saveBtnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
  </svg>`;

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
        //console.log("row appended");
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
    // If localStorage dates do not match, clear localStorage
    if (m == localStorage.getItem("m")) {
        // had to set if statement up like this due to === and !== funky business
        console.log("Dates match");
    } else {
        localStorage.clear();
        console.log("Local storage has been cleared");
    }
    localStorage.setItem("m", m);
    //console.log("The document is ready!");
    //console.log(m);
    //console.log(localStorage.getItem("m"));
    $("#currentDay").text(m);
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