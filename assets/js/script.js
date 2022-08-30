// Testing JQuery
$("header").click(function() {
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
    inputEl.value = "This is where the text will go";
    if(hour < currentHour) {
        inputEl.classList.add("past");
    } else if (hour === currentHour) {
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
    for(let i = 9; i <= 17; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "row time-block");
        if(i < 12) {
            row.innerHTML = `<div class="hour">${i}AM</div>`;
        } else if(i === 12) {
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


// Retrieve Local Storage 


$(document).ready(function(){
    var m = moment().format("dddd, MMMM D");
    console.log("The document is ready!");
    console.log(m);
    $("#currentDay").text(m);
    generateRows();
});

/* General steps moving forward:
    - Use Moment.js to get current day
    - Load current day
    - Use Moment.js to get current time.
    - load up time slots and pull information from
        local storage to fill information.
    - save functions once buttons are hit
*/