$(document).ready(function () {

	var stack = new StackDataStructure();

	var html = '';
	var input = $('#stack-input');
	var btnAdd = $('#btn-add');
	var btnTake = $('#btn-take');
	var inputVal = '';
	var totalList = $('.stack-li');
	var newItem = '<li class="stack-li"></li>';

	console.log('totalList', totalList);

	var inputValue = function () {
		return input.prop('value');
	}

	if (stack.isEmpty) {
		var i = 0;
		while(i < stack.MAX_SIZE){
			html += newItem;
			i++
		}
	}

	$('#stack-ul').html(html);

	$(btnAdd).on('click', function(e) {
		e.preventDefault();
		inputVal = inputValue();
		stack.push(inputVal);
		totalList.push()

		console.log('stackControl', stack.stackControl);


	});

});