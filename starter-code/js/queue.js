var queue = new QueueDataStructure();

$("#add-queue").click(function(){
	var elem = $("#queue-input").val()
	if (elem != ""){
		$(".queue-element").last().html(queue.enqueue(elem));
	}
	$("#queue-input").val("");
})