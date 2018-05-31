$(document).ready(function() {



    // add-btn:
    /* 
    - push input value to the array, bottom first (think this is on slack, look for codepen)
    - function that pushes only if array isn't full. If full, last item should temporarily display that there's an overflow with the under-over-flow-class.
    */

    $(".btn-add").click(function() {
        if ($(".list-group li:nth-child(1) button").hasClass("active")) {
            $("body aside strong").html("$"+parseInt(++sumNum))
        }
        else {
            $(".list-group li:nth-child(1)").addClass("active") //if not active, add
          $("body aside strong").html("$"+parseInt(--sumNum))
        }
      });
      


    $(".btn-take").click(function() {

        if ($(".list-group li:nth-child(1) button").hasClass("active")) {
            $(".list-group li:nth-child(1)").removeClass("active") //if active, remove
          $("body aside strong").html("$"+parseInt(++sumNum))
        }
        
        else {
          $("body aside strong").html("$"+parseInt(--sumNum))
        }
      });







    /* take-btn:
    - pop input from the array, I think the last one to come is the one to go as well. 
    - function must only pop if not empty, display message otherwise
    */


});