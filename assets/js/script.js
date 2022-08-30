// Testing JQuery
$("header").click(function() {
    console.log("The title has been clicked.");
});
//console.log(moment().format("dddd, MMMM D"));


// Generate columns



// Retrieve Local Storage 


$(document).ready(function(){
    var m = moment().format("dddd, MMMM D");
    console.log("The document is ready!");
    console.log(m);
    $("#currentDay").text(m);
});

/* General steps moving forward:
    - Use Moment.js to get current day
    - Load current day
    - Use Moment.js to get current time.
    - load up time slots and pull information from
        local storage to fill information.
    - save functions once buttons are hit
*/