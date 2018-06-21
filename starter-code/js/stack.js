
var stack = new StackDataStructure();

//#add-stack es el botón STACK. #stackelement es el input
$("#add-stack").click(function(){
	var elem = $("#stackelement").val()
	if (elem != ""){
		$(".stack-element").last().html(stack.push(elem));
	}
	$("#stackelement").val("");


})



