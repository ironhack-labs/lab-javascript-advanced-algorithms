$(document).ready(function(){

	var allStacks = new StackDataStructure ();

	$("#btn-1").on("click",function(){
		var value = allStacks.push($("input").val());
		console.log(allStacks);
		$( ".grey" ).last().removeClass("grey").addClass("active");

	})


	$("#btn-2").on("click",function(){
		allStacks.pop();
		console.log(allStacks);
		$( ".active" ).first().removeClass("active").addClass("grey");
	})

});