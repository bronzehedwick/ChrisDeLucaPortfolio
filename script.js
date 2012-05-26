"use strict";
function handle1Clicked() {
    $("#cube").addClass("show-front");
    console.log("Added show-front");
}
$(document).ready( function() {
    $("#1").click(handle1Clicked);
});

