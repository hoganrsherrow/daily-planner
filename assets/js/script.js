// Connection check
console.log("Connection is working");
// Testing JQuery
$("header").click(function() {
    console.log("The title has been clicked.");
});
// Testing Moment.js
console.log(moment("12-25-1995", "MM-DD-YYYY"));


// Generate columns



// Retrieve Local Storage 


$(document).ready(function(){
    console.log("The document is ready!");
});

/* General steps moving forward:
    - Use Moment.js to get current day
    - Load current day
    - Use Moment.js to get current time.
    - load up time slots and pull information from
        local storage to fill information.
    - save functions once buttons are hit
*/