$(document).ready(function() {

  var allStacks = new StackDataStructure ();
  
 $("#btn-1").on("click",function (){
   allStacks.push($("input").val());
   console.log(allStacks);

   $(".grey").last().removeClass("grey").addClass("active");
 
  })

$("btn-2").on("click")

});